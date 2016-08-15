/*globals Chart */
define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        AsyncReportLoader = require('thirdchannel/views/reports/async_report'),
        SalesCompareModel = require('thirdchannel/models/labs/sales_comparison'),
        WidgetView = require('thirdchannel/views/reports/index/widget');

        /**
         * Responsible for the rendering of one 'side's' worth of widgets
         *  
         * @type View
         */
        return Backbone.View.extend({
            loadingTemplate: HandlebarsTemplates['thirdchannel/loading'],
            saleSectionTemplate: HandlebarsTemplates['thirdchannel/labs/sales_comparison/sales_section'],
            retailSalesTemplate: HandlebarsTemplates['thirdchannel/labs/sales_comparison/retail_sales'],
            initialize: function (options) {
                if (options.groupSelect === undefined) {
                    throw "No 'groupSelect' parameter set in constructor for the SalesCompareSideView";
                }
                _.bindAll(this, 'applyFilter', 'reportComplete');
                this.$groupSelect = options.groupSelect;
                this.model = new SalesCompareModel();
                this.reportLoader = new AsyncReportLoader(context.current_report);
                this.reportLoader.setElement(this.$el);

                this.$groupSelect.on('change', this.applyFilter);
                this.listenTo(context, 'filter:query', this.applyFilter);
                this.listenTo(this.model, "sync", this.render);
                this.listenTo(this.reportLoader, "reports:async:complete", this.reportComplete);

                return this;
            },


            applyFilter: function (qs) {
                this.$el.html(this.loadingTemplate());
                if (qs && !qs.preventDefault) {
                    this.currentQS = qs;
                } else {
                    qs = this.currentQS;
                }
                qs = qs + "&group=" + encodeURIComponent(this.$groupSelect.val());
                this.model.setQueryString(qs);
                this.model.fetch();
            },

            render: function () {
                this.$el.empty().append(this.loadingTemplate()).append(this.saleSectionTemplate());

                this.reportLoader.layout(this.model.get('report').report_meta_data);
                this._renderSales();
                this.reportLoader.loadWidgets(this.model.queryString);

                return this;
            },

            reportComplete: function() {
                this.$(".loading-section").remove();
            },

            _renderSales: function () {
                var $widgets = this.$('.sales-overview .widgets');
                $widgets.append(this._buildStoreTotal());
                $widgets.append(this._buildAverageRetailSalesChart());
            },

            _buildStoreTotal: function () {
                var data = {
                    config: {},
                    display_type: 5,
                    results: this.model.get('report').totalStores,
                    title: "Stores with Sales Data"
                };
                return new WidgetView(data).render().$el;
            },

            _buildAverageRetailSalesChart: function () {

                var list = this.model.get('report').sales;
                this._formatCents(list);

                var labels = ['x'].concat(_.map(list, function (item) { return item.date; })),
                    points = ['Average Retail Sales'].concat(_.map(list, function (item) { return item.rawUSD; })),
                    data = {
                        config: {
                            y_prefix: '$'
                        },
                        display_type: 14,
                        results: {
                            data: {
                                x: 'x',
                                columns: [labels, points],
                                type: 'area-spline'
                            },
                            axis: {
                                x: {
                                    type: 'timeseries',
                                    tick: {
                                        fit: true,
                                        centered: true,
                                        multiline: false,
                                        format: '%-m/%-d/%y'
                                    }
                                }
                            },
                            padding: {
                                top: 25,
                                right: 25
                            }
                        },
                        title: ""
                    };
                return new WidgetView(data).render().$el;
            },

            _formatCents: function (list) {
                var i = 0,
                    max = list.length;
                for (i; i < max; i++) {
                    list[i].rawUSD = Math.round(list[i].cents/100);
                }
            }
        });
});
