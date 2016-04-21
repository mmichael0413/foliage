/*globals Chart */
define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),



        context = require('context'),
        templates = require('handlebarsTemplates'),
        d3 = require('d3'),
        c3 = require('c3'),



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
            initialize: function (opts) {
                if (opts.groupSelect === undefined) {
                    throw "No 'groupSelect' parameter set in constructor for the SalesCompareSideView";
                }
                this.$groupSelect = opts.groupSelect;

                this.model = new SalesCompareModel();
                this._attachAsyncLoader();


                
                this.$groupSelect.on('change', function () {
                    this.applyFilter(this.currentQS);
                }.bind(this));
                this.listenTo(context, 'filter:query', this.applyFilter);
                this.listenTo(this.model, "sync", this.render);
                // the breakdown links uses a relative path, which is incompatible with us. this function 
                // updates the breakdown links on the fly to use the correct path
                this.listenTo(this.reportLoader, "reports:async:complete", function () {
                    this.$el.find(".loading-section").remove();
                    this.$el.find(".breakdown-link").on("click", function (e) {
                        this.updateLinks(e);
                    }.bind(this));
                }.bind(this));
                return this;
            },

            _attachAsyncLoader: function () {
                this.reportLoader = new AsyncReportLoader(context.current_report);
                this.reportLoader.setElement(this.$el);

            },


            applyFilter: function (qs) {
                this.$el.html(this.loadingTemplate());
                this.currentQS = qs;
                qs = qs + "&group=" + encodeURIComponent(this.$groupSelect.val());
                this.model.setQueryString(qs);
                this.model.fetch();
            },













            updateLinks: function (e) {
                e.preventDefault();
                e.stopPropagation();
                var $link = $(e.currentTarget),
                    href = $link.attr("href");
                if (this.global !== true) {
                    href = href + "&customer_store_id=" + this.model.get('report').customer_store_id;
                }
                window.location = "../" + href;
            },





            render: function () {
                this.$el.empty().append(this.loadingTemplate()).append(this.saleSectionTemplate());

                this.reportLoader.layout();
                this._renderSales();
                this.reportLoader.loadWidgets(this.model.queryString);

                return this;
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