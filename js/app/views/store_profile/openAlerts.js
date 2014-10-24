define(function(require) {
    var FilterableTableView = require('app/views/shared/filterableTable'),
        Backbone = require('backbone'),

        OpenAlertsView = FilterableTableView.extend({
            el: '#openAlerts',
            loadingHTML: "<div class='item'><i class='fa fa-spin fa-spinner'></i></div>",
            collectionClass: Backbone.Collection.extend({
                queryString:"",
                url: function () {
                    return "test_url" + "?" + this.queryString;
                }
            }),
            template: 'store_profile/open_alerts_rows',
            bodySelector: '.body',
            initialize: function (data) {
                OpenAlertsView.__super__.initialize.apply(this, arguments);
                this.count = data.count;
                return this;
            },
            render: function () {
                this.$el.find('.counter').text(this.count+" ");
                return OpenAlertsView.__super__.render.apply(this, arguments);
            }
        });
        return OpenAlertsView;     
});