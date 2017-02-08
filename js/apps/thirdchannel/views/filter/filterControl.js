define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        spinnerTemplate = require('handlebarsTemplates')['thirdchannel/filters/spinner_component'],
        SingleAnswerComponentView = require('thirdchannel/views/filter/singleAnswerComponent'),
        DateComponentView = require('thirdchannel/views/filter/dateComponent'),
        HiddenComponentView = require('thirdchannel/views/filter/hiddenComponent'),
        FilterableComponentView = require('thirdchannel/views/filter/filterableComponent'),
        ComponentView = require('thirdchannel/views/filter/component'),
        FilterStore = require('thirdchannel/views/filter/filterStore'),
        qslib = require('qs'),
        SerializeObject = require('serializeObject'),
        helpers = require('helpers');

    /**
     * The 3C Filter is simply an interactable wrapper built around a form. This form can be 
     * serialized into a query string, which can then be used by the current Content View
     * to issue a query to the server.
     *
     * It also supports 'deep linking', meaning that if parameters are in the current url, they will be
     * understood
     * 
     * The filter will emit the event 'filter:query' and pass along the query string to be used
     * by the current View.
     *
     * The individual filter components are rendered via Handlebars, and it is up to the server
     * to pass along the correct options and configuration.
     *
     * The filter will look in window for a 'filterBootstrap' object, which should contain a collection
     * of filter objects, or a url to fetch filters from
     * 
     *
     * 
     *
     * @exports thirdchannel/views/filter/filterControl
     */
    var control = {
        el: '#site-filter',

        openClass: 'open',

        events: {
            'click .clear-filters': 'clearFilters'
        },

        enableDeepLinks: true,

        excludeFields: [],
        
        initialize: function (data) {
            _.bindAll(this, 'filterExcludedFields');

            this.components = {};

            // look for any filter components within the filter, then wrap a view around them
            //var components = this.$el.find('.filter-component'),
            //
            var qsHash = this.parseQueryString(),
                shouldTrigger = false;

            if (!data || !data.collection) {
                console.error("We need at least a data.collection to get started with the filter");
                
                return false;
            }
            this.store = FilterStore;
            this._registerStore(this.store);
            

            shouldTrigger = this.renderFilterCollection(data.collection, qsHash);

            var self = this;

            if (data.url) {
                var $spinner = $(spinnerTemplate()),
                    asyncFilters = new (Backbone.Collection.extend({
                        url: data.url
                    }))();
                self.$el.append($spinner);
                
                asyncFilters.fetch()
                .then(function () {
                    $spinner.remove();
                })
                .done(function () {
                    //console.log(arguments);
                    self.renderFilterCollection(asyncFilters, qsHash);
                    self.broadCastQueryString();
                });
            }

            this._applyQSGlobal(qsHash);
            this.broadCastQueryString();

            this.listenTo(context, 'filter:request', this.handleFilterRequest);
            this.listenTo(context, 'filter:request:queryString', _.debounce(function () {
                setTimeout(function() {
                    self.handleFilterRequestQueryString();
                }, 500);
            }), 500);
            this.listenTo(context, 'filter:set', this.setFromExternal);
            this.listenTo(context, 'filter:set:quiet', this.setFromExternalQuiet);
            this.listenTo(context, 'configure:deepLinks', this.configureDeepLinks);
            this.listenTo(context, 'configure:excludeFields', this.configureExcludeFields);

            // finally, check if we should Trigger the filter. This is done down here to avoid
            // repeated triggerings if we checked this in the while loop.
            if (shouldTrigger && !helpers.isMobile.any()) {
                // open the filter if we have filter-component filters active, not simply a pagination
                // let my master know, yes.
                context.trigger('filter:toggle');
            }
        },

        _registerStore: function (filterStore) {
            if (!context.hasOwnProperty("stores")) {
                context.stores = {};
            }
            context.stores.filter = filterStore;
        },

        render: function () {

        },

        clearFilters: function () {
            for (var key in this.components) {
                this.components[key].clear();
            }
            this.broadCastQueryString();
        },

        removeFilterCollection: function() {
            _.each(this.components, function(view, param) {
               view.remove();
            });
        },

        renderFilterCollection: function(filterCollection, qsHash) {
            var self = this,
                shouldTrigger = false,
                view;

            filterCollection.each(function (filterModel) {
                if (filterModel.get('name') !== undefined) {
                    context.stores.filter.setFilterState(filterModel.get('name'), undefined);
                    view = self.selectComponentView(filterModel).render();
                    self.$el.append(view.$el);
                    self.components[view.filterParam] = view;
                    // apply the query string to any components in the filter.
                    // capture the response to know if we should toggle open the filter later
                    if (self._applyQS(view, qsHash) === true) {
                        shouldTrigger = true;
                    }
                }
            });

            return shouldTrigger;
        },

        /**
         * Determines which ComponentView to use base on the existing markup. 
         * 
         * @param  {Backbone.Model} filterModel A Backbone Model containing the filter information
         * @return {Backbone.View} view
         * 
         */
        selectComponentView: function (filterModel) {
            var view = ComponentView;
            if (filterModel.get('type') === 'date') {
                view = DateComponentView;
            }
            else if (filterModel.get('type') === 'hidden') {
                view = HiddenComponentView;
            }
            else if (filterModel.get('type') === 'filterable') {
                view = FilterableComponentView;
            }
            else if (filterModel.get('name').indexOf('[]') === -1) {
                view = SingleAnswerComponentView;
            }
            return new view({model: filterModel});
        },
        
        /**
         * Examples the component views to see if one matches the parameter in the query string hash.
         *
         * @private
         * @param  {View} view 
         * @param  {object} qsHash A hash of the queryString arguments currently in the url
         * @return {boolean}
         * 
         */
        _applyQS: function(view, qsHash) {
            var success = false;
            if (qsHash[view.filterParam]) {
                success = true;
                var i = 0,
                    items = qsHash[view.filterParam];
                for (i; i < items.length; i++) {
                    view.addFilterByValue(decodeURIComponent(items[i]));
                }
            }
            return success;
        },

        /**
         *
         * @param qsHash
         * @private
         */
        _applyQSGlobal: function (qsHash) {
            // look up all .global inputs, then see if we have values in the query hash
            var globals = this.$el.find('input.global'),
                i = globals.length;
            while(i--) {
                if (qsHash[globals[i].name]) {
                    globals[i].value = qsHash[globals[i].name][0];
                }
            }
        },

        handleFilterRequest: function () {
            this.$el.find('input[name="page"]').val(1);
            this.broadCastQueryString();
        },

        handleFilterRequestQueryString: function () {
            context.trigger('filter:queryString', this.$el.serialize());
        },

        broadCastQueryString: function () {
            // update the url so that we can access the deep link later on
            if(this.enableDeepLinks && context.router) {
                context.router.navigate(window.location.pathname + "?" + this.serializeForm(), {trigger: false, replace:true});
            }
            context.trigger('filter:query', this.$el.serialize());
            this.serializeForm();
        },

        /**
         *
         * @param data
         */
        setFromExternal: function(fields) {
            var threshold = this.setData(fields);
            if (threshold > 0) {
                this.broadCastQueryString();
            }
        },

        setFromExternalQuiet: function(fields) {
            this.setData(fields);
        },

        setData: function(fields) {
            var $input,
                threshold = 0,
                i = 0;
            for (i = 0; i < fields.length; i++) {
                $input = this.$el.find('input[name="' + fields[i].name + '"]');

                if ($input) {
                    $input.val(fields[i].value);
                    threshold++;
                }
            }

            return threshold;
        },

        /**
         * Parses the query string, building a hash of arrays, accounting for multiple
         * instances of query parameters. Eg. Rails allows for 'parameter[]' to contain multiple
         * parameters in the back end
         *
         * @returns {{}}
         */
        parseQueryString: function () {
            var vars = decodeURI(window.location.search.substring(1)).split("&"),
                data = {};

            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (!data[pair[0]]) {
                    data[pair[0]] = [];
                }
                data[pair[0]].push(pair[1]);
            }

            return data;
        },

        configureDeepLinks: function(isEnabled) {
            this.enableDeepLinks = isEnabled;
        },

        configureExcludeFields: function(excludeFields) {
            this.excludeFields = excludeFields;
        },

        serializeForm: function() {
            var formData = this.$el.serializeObject();
            this.model.set(formData);
            return qslib.stringify(formData, { arrayFormat: 'brackets', filter: this.filterExcludedFields });
        },

        filterExcludedFields: function(prefix, value) {
            if (typeof value === 'object') {
                _.each(value, function(valueObj, key){
                    value[key] = this.filterExcludedFields(key, valueObj);
                }, this);
            }
            if (value === '') {
                return;
            }
            if ($.inArray(prefix, this.excludeFields) !== -1) {
                return;
            }
            return value;
        }
    };

    return Backbone.View.extend(control);
});