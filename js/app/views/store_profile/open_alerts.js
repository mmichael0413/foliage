define(function(require) {
    var FilterableTableView = require('app/views/shared/filterable_table'),
        OpenAlertsDetails = require('app/views/store_profile/open_alerts_details'),
        BaseAlertsCollection = require('app/collections/alerts/base'),
        AlertRowView = require('app/views/store_profile/alert_row_view'),
        context = require('context'),
        PaginationView = require('app/views/utils/pagination'),

        /**
         * 
         * 
         * @exports app/views/store_profile/open_alerts
         */
        OpenAlertsView = FilterableTableView.extend({
            el: '#openAlerts',
            loadingHTML: "<div class='item'><i class='fa fa-spin fa-spinner'></i></div>",
            collectionClass: BaseAlertsCollection.extend({
                resolved: false,
                per: 3,

            }),
            subViewClass: OpenAlertsDetails,
            template: 'store_profile/alerts_rows',
            bodySelector: '.body',

            initialize: function () {
                var self = this;
                this.listenTo(context, "filter:query:alerts", function () {
                    self.collection.fetch({reset:true});
                });
                OpenAlertsView.__super__.initialize.call(this, arguments);
            },

            additionalData: function () {
                return context.alerts;
            },

            afterRender: function () {   
                //clean up old pager, if exists
                if (this.pager) {
                    this.stopListening(this.pager);
                    this.pager.remove();
                    delete this.pager;
                    // need to re-add the target for the pager. 
                    this.$el.prepend("<div class='pagination-holder'></div>");    
                }
                var $paginationHolder = this.$el.find('.pagination-holder');
                if ($paginationHolder.length > 0) {
                    this.pager = new PaginationView(this.collection.pages !== undefined ? this.collection.pages : this.pages).render();
                    // replace the existing pagination holder with the pager. If we simply prepended the pager into the view, there would be a 
                    // jumping effect as the element is removed, reflowed, then added again.
                    // it's a bit tedius, certainly, but the effect is nice.
                    $paginationHolder.replaceWith(this.pager.$el);
                    this.listenTo(this.pager, 'new_page', this.pageChange);    
                }
                
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

            renderCollection: function (model) {
                this.count = model.pages.totalCount;
                this.pages = model.pages;
                OpenAlertsView.__super__.renderCollection.call(this, model.items);
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
        return OpenAlertsView;     
});