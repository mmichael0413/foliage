define(function(require) {
    var _ = require('underscore'),
        FilterableTableView = require('thirdchannel/views/shared/filterable_table'),
        OpenAlertsDetails = require('thirdchannel/views/store_profile/open_alerts_details'),
        BaseAlertsCollection = require('thirdchannel/collections/alerts/base'),
        AlertRowView = require('thirdchannel/views/store_profile/alert_row_view'),
        context = require('context'),
        Pageable = require('shared/views/utils/pageable_component'),

        /**
         * Filterable View for displaying Open Alerts
         *
         * 
         * @mixes module:shared/views/utils/pageable_component
         * @extends {module:thirdchannel/views/shared/filterable_table}
         * @exports thirdchannel/views/store_profile/open_alerts
         */
        OpenAlertsView = {};
    _.extend(OpenAlertsView, Pageable);
    _.extend(OpenAlertsView,
        {
            el: '#openAlerts',
            loadingHTML: "<div class='item'><i class='fa fa-spin fa-spinner'></i></div>",
            collectionClass: BaseAlertsCollection.extend({
                resolved: false,
                per: 3,

            }),
            subViewClass: OpenAlertsDetails,
            template: 'thirdchannel/store_profile/alerts_rows',
            bodySelector: '.body',

            initialize: function () {
                var self = this;
                this.listenTo(context, "filter:query:alerts", function () {
                    self.collection.fetch({reset:true});
                });
                FilterableTableView.prototype.initialize.call(this, arguments);
            },

            additionalData: function () {
                return context.alerts;
            },

            afterRender: function () {   
                this.renderPagination();
                
                // update the counter value
                this.$el.find('.counter').text((this.collection.count !== undefined ? this.collection.count : this.count) + " ");
                // create row View on top of each row
                this.rowViews = [];
                var self = this;
                this.$el.find('.alert-row').each(function (i, row) {
                    var view = new AlertRowView({subViewClass: self.subViewClass, collection: self.collection});
                    view.setElement(row);
                    self.rowViews.push(view);    
                });
                
            },


            pageChange: function (page) {
                // clear subviews
                var i = this.rowViews.length;
                while(i--) {
                    this.rowViews[i].remove();
                }
                this.collection.page = page;
                this.collection.fetch({reset:true});
            }
            
        });
        return FilterableTableView.extend(OpenAlertsView);
});