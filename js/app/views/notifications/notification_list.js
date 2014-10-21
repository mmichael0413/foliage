define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        NotificationCollection = require('app/collections/notifications/notifications'),
        FilterableTableView = require('app/views/shared/filterableTable'),
        context = require('context');

    return FilterableTableView.extend({
        template: 'notifications/notification',

        initialize: function (options) {
            this.url = options.url;
            this.collection = new NotificationCollection({url: this.url});
            this.pager = options.pager;
            this.listenTo(this.collection, 'reset', this.render);
            this.listenTo(this.pager, 'new_page', this.applyFilter);


            return this;
        },
        applyFilter: function (qs, container) {
            // set the Query String on the collection, then force it to reset
            // backbone will automatically trigger the redrawing of the
            // members


                $tbody = this.$('tbody');
                $tbody.html("<tr><td><i class='fa fa-spin fa-spinner'></i></td></tr>");

                this.collection.queryString = qs;
                this.collection.fetch({reset:true});

        }
    });
});