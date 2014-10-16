
define(function(require) {
    
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        dispatcher = require('app/utils/eventListener');
    
    return Backbone.View.extend({

        el: 'table.table',

        collectionClass: undefined,
        template: '',

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
            this.listenTo(dispatcher, 'filter:query', this.applyFilter);
            return this;
        },

        render: function () {

            var $tbody = this.$el.find('tbody'),
                data = {
                    rows: this.collection.toJSON()
                };

            $tbody.html("<tr><td><i class='fa fa-spin fa-spinner'></i></td></tr>");

            $tbody.html(HandlebarsTemplates[this.template](data));
            return this;
        },

        applyFilter: function (qs) {
            // set the Query String on the collection, then force it to reset
            // backbone will automatically trigger the redrawing of the
            // members
            console.log('apply filter');
            $tbody = this.$('tbody');
            $tbody.html("<tr><td><i class='fa fa-spin fa-spinner'></i></td></tr>");


            this.collection.queryString = qs;
            this.collection.fetch({reset:true});
        },

        _applySortableColumn: function (e) {
            e.stopPropagation();
            e.preventDefault();
            var $link = $(e.currentTarget),
                column = $link.attr('rel'),
                direction = 'asc';
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
            dispatcher.trigger('filter:set', [
                {name: "direction", value: direction},
                {name: "sort", value: column}
            ]);
        }
    }); 
});