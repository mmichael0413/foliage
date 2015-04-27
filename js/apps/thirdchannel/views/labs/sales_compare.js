define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        context = require('context'),
        templates = require('handlebarsTemplates'),
        QueryStringAwareModel = require('thirdchannel/models/labs/query_string_aware'),

        /**
         * SalesCompare View is the main driver on the Sales Compare page.
         * Responsible for fetching sales information from the server, and rendering the individual widget views.
         *
         * events triggered:
         * topStores:received
         * 
         * @type View
         */
        SalesCompareView = {

            el: ".content",
            loadingHTML: "<i class='fa fa-spin fa-spinner fa-4x'></i>",
            initialize: function () {
                this.model = new QueryStringAwareModel({baseURL: context.links.salesCompare.self});
                this.$leftRetail = this.$el.find('.left .retail-sales .body');
                this.$rightRetail = this.$el.find('.right .retail-sales .body');
                
                this.listenTo(context, 'filter:query', this.applyFilter);
                this.listenTo(this.model, 'sync', this.render);
                this.listenTo(this.model, 'sync', this.broadcastStores);

                // get the filter to trigger what it currently has, thus getting the model to listen and fetch. yay events
                context.trigger('filter:request');
            },

            applyFilter: function (qs) {
                this.model.queryString = qs;
                this.$leftRetail.html(this.loadingHTML);
                this.$rightRetail.html(this.loadingHTML);
                this.model.fetch()
                .fail(function () {
                    this.$leftRetail.html("<p class='col-1-1'>There was an error fetching your data</p>");
                    this.$rightRetail.html("<p class='col-1-1'>There was an error fetching your data</p>");
                }.bind(this));
            },
            broadcastStores: function (event, data) {
                var message = {
                    totalStores: data.totalStores,
                    uuids: _.map(data.stores, function (store){
                        return store.customerStoreUUID;
                    }),
                    topStores: data.stores.length,
                    queryString: this.model.queryString
                };
                context.trigger("topStores:received", message);
            },

            render: function () {
                var data = this.model.toJSON();
                this.$leftRetail.html(templates['thirdchannel/labs/sales_compare/retail_sales']({sales: data.topWeeklySales}));
                this.$rightRetail.html(templates['thirdchannel/labs/sales_compare/retail_sales']({sales: data.weeklySales}));
                return this;
            }
        };
    return Backbone.View.extend(SalesCompareView);
});