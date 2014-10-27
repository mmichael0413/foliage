
define(function(require) {
    
    var Backbone = require('backbone'),
        $ = require('jquery'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context');
    
    return Backbone.View.extend({

        el: 'table.table',

        collectionClass: undefined,
        template: '',
        loadingHTML: "<tr><td><i class='fa fa-spin fa-spinner'></i></td></tr>",
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

        render: function () {

            var $tbody = this.$el.find(this.bodySelector),
                data = {
                    rows: this.collection.toJSON()
                };
            
            $tbody.html(this.loadingHTML);

            $tbody.html(HandlebarsTemplates[this.template](data));
            return this;
        },

        applyFilter: function (qs) {
            // set the Query String on the collection, then force it to reset
            // backbone will automatically trigger the redrawing of the
            // members
            
            var $tbody = this.$(this.bodySelector);
            $tbody.html(this.loadingHTML);

            
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