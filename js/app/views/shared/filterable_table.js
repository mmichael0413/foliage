
define(function(require) {
    
    var Backbone = require('backbone'),
        $ = require('jquery'),
        _ = require('underscore'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context');
    
    return Backbone.View.extend({

        el: 'table.table',

        collectionClass: undefined,
        template: '',
        loadingHTML: "<tr><td><i class='fa fa-spin fa-spinner'></i></td></tr>",
        failHTML: "Unable to load data. Please contact Tech Support",
        bodySelector: 'tbody',

        events: {
          'click .sortable-column-header': '_applySortableColumn'
        },

        initialize: function () {
            // setup a collection internal to the View, which contains all
            // members that we wish to draw on this page
            this.collection = new this.collectionClass();
            // listeners for the collection.
            this.listenTo(this.collection, 'reset', this.render);
            this.listenTo(this.collection, 'add', this.render);
            // query execution event, the filter broadcasts the QueryString to use
            // for the active page
            this.listenTo(context, 'filter:query', this.applyFilter);
            return this;
        },

        /**
         * The render function assumes that the collection has already been fetched
         * 
         * @return {[type]} [description]
         */
        render: function () {
            var $body = this.$el.find(this.bodySelector),
                data = {
                    rows: this.collection.toJSON()
                };
            _.extend(data, this.additionalData());
            $body.html(this.loadingHTML);

            $body.html(HandlebarsTemplates[this.template](data));
            this.afterRender();
            return this;
        },

        /**
         * Renders the view using the provided data as the collection models
         * 
         * @param  {Array} data [description]
         */
        renderCollection: function (data) {
            this.collection.reset(data);
        },

        /**
         * If the collection is not already loaded, use this function instead.
         * Fetches the collection, then calls 'render', unless there's a failure, in which case 'fetchFail' will be called
         * 
         */
        fetch: function () {
            var self = this;
            self.collection.fetch({reset:true})
                .done(function () {
                    self.render.apply(self);
                })
                .fail(function () {
                    self.fetchFail.apply(self, arguments);
                });
        },

        additionalData: function () {
            return {};
        },

        afterRender: function () {},

        fetchFail: function () {
            this.$el.find(this.bodySelector).html(this.failHTML);
            this.afterRender();
        },

        applyFilter: function (qs) {
            // set the Query String on the collection, then force it to reset
            // backbone will automatically trigger the redrawing of the
            // members
            
            this.$(this.bodySelector).html(this.loadingHTML);
            this.collection.queryString = qs;
            this.collection.fetch({reset:true});
        },

        _applySortableColumn: function (e) {
            e.stopPropagation();
            e.preventDefault();
            var $link = $(e.currentTarget),
                column = $link.attr('rel'),
                direction = 'asc',
                remove = 'desc';
            if ($link.hasClass('asc')) {
                direction = 'desc';
                remove = 'asc';
            } else if ($link.hasClass('desc')) {
                direction = 'asc';
                remove = 'desc';
            }


            $link.addClass('current');
            $link.addClass(direction);
            $link.removeClass(remove);
            context.trigger('filter:set', [
                {name: "direction", value: direction},
                {name: "sort", value: column}
            ]);
        }
    }); 
});