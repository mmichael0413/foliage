/*globals Chart */
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
         *
         * Delete?
         *
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
                console.log("Will use the url " + context.links.salesCompare.side);
                this.model = new QueryStringAwareModel({baseURL: context.links.salesCompare.side});
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
                
                this.$leftRetail.html(templates['thirdchannel/labs/sales_compare/retail_sales']({sales: this.model.get('topWeeklySales')}));
                this.$rightRetail.html(templates['thirdchannel/labs/sales_compare/retail_sales']({sales: this.model.get('weeklySales')}));
                var data = this.model.toJSON(),
                    $leftCtx = this.$leftRetail.find('.retail-sales')[0].getContext("2d"),
                    $rightCtx = this.$rightRetail.find('.retail-sales')[0].getContext("2d");
                
                this._buildChart($leftCtx, data.topWeeklySales);
                this._buildChart($rightCtx, data.weeklySales);


                
                return this;
            },

            _buildChart: function (ctx, list) {
                this._formatCents(list);
                var labels = _.map(list, function (item) { return item.date; }),
                    points = _.map(list, function (item) { return item.rawUSD; }),
                    data = {
                        labels: labels,
                        datasets: [
                        {
                            label: "Test",
                            fillColor: "rgba(241,95,81,0.2)",
                            strokeColor: "rgba(241,95,81,1)",
                            pointColor: "rgba(241,95,81,1)",
                            pointStrokeColor: "#fff",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(220,220,220,1)",
                            data: points
                        }]
                    };
                new Chart(ctx).Line(data, {});
            },

            _formatCents: function (list) {
                var i = 0,
                    max = list.length;
                for (i; i < max; i++) {
                    list[i].rawUSD = Math.round(list[i].cents/100);
                }
            }
        };
    return Backbone.View.extend(SalesCompareView);
});