define(function(require) {
    var Backbone = require('backbone'),
        $ = require('jquery'),
        dispatcher = require('app/utils/eventListener'),
        spinnerTemplate = require('handlebarsTemplates')['filters/spinner_component'],
        SingleAnswerComponentView = require('app/views/filter/singleAnswerComponent'),
        DateComponentView = require('app/views/filter/dateComponent'),
        ComponentView = require('app/views/filter/component');

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
     * @exports app/views/filter/filterControl
     */
    var control = {
        el: '#site-filter',

        openClass: 'open',

        events: {
            'click .clear-filters': 'clearFilters'
        },

        
        initialize: function (data) {

            this.components = {};

            // look for any filter components within the filter, then wrap a view around them
            //var components = this.$el.find('.filter-component'),
            //
            var qsHash = this.parseQueryString(),
                shouldTrigger = false;
            
            shouldTrigger = this.renderFilterCollection(data.collection, qsHash);

            if (data.url) {
                
                var self = this,
                    $spinner = $(spinnerTemplate()),
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
                });
            }
            

            this._applyQSGlobal(qsHash);


            this.listenTo(dispatcher, 'filter:request', this.handleFilterRequest);
            this.listenTo(dispatcher, 'filter:request:queryString', this.handleFilterRequestQueryString);
            this.listenTo(dispatcher, 'filter:set', this.setFromExternal);
            // finally, check if we should Trigger the filter. This is done down here to avoid
            // repeated triggerings if we checked this in the while loop.
            if (shouldTrigger) {
                // open the filter if we have filter-component filters active, not simply a pagination
                // let my master know, yes.
                dispatcher.trigger('filter:toggle');
            }
        },

        clearFilters: function () {
            for (var key in this.components) {
                this.components[key].clear();
            }
            this.broadCastQueryString();
        },

        renderFilterCollection: function(filterCollection, qsHash) {
            var self = this,
                shouldTrigger = false,
                view;
            filterCollection.each(function (filterModel) {
                view = self.selectComponentView(filterModel).render();
                self.$el.append(view.$el);
                self.components[view.filterParam] = view;
                // apply the query string to any components in the filter.
                // capture the response to know if we should toggle open the filter later
                if (self._applyQS(view, qsHash) === true) {
                    shouldTrigger = true;
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
                    view.addFilterByValue(items[i]);
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
            dispatcher.trigger('filter:queryString', this.$el.serialize());
        },

        broadCastQueryString: function () {
            dispatcher.trigger('filter:query', this.$el.serialize());
        },

        /**
         *
         * @param data
         */
        setFromExternal: function (fields) {
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
            if (threshold > 0) {
                this.broadCastQueryString();
            }
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
        }
    };

    return Backbone.View.extend(control);
});