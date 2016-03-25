/*globals Chart */
define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        $ = require('jquery'),
        _ = require('underscore'),
        templates = require('handlebarsTemplates'),
        WidgetView = require('thirdchannel/views/reports/index/widget'),
        d3 = require('d3'),
        c3 = require('c3'),
        AsyncReportLoader = require('thirdchannel/views/reports/async_report'),

        SalesCompareModel = Backbone.Model.extend({
            // fetch the meta sales information into this model, then use that to render the meta and sales tabs
         setQueryString: function (qs) {
             this.queryString = qs;
         },
         url: function () {
             return context.links.salesCompare.side +"?" + this.queryString;
         }
        }),

        /**
         * Responsible for the rendering of one 'side's' worth of widgets
         *  
         * @type View
         */
        SalesCompareSideView = {
            initialize: function (opts) {
                if (opts.groupSelect === undefined) {
                    throw "No 'groupSelect' parameter set in constructor for the SalesCompareSideView";
                }
                this.$groupSelect = opts.groupSelect;
                this.loadingHTML = this.$el.html();
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
                    this.$el.find(".loading").remove();
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
                this.$el.html(this.loadingHTML);
                this.currentQS = qs;
                qs = qs + "&group=" + encodeURIComponent(this.$groupSelect.val());
                this.model.setQueryString(qs);
                this.model.fetch()
                 .fail(function () {
                        
                 });
            },

            render: function () {
                //this.$el.empty();
                this.$el.html(this.loadingHTML);
                this.reportLoader.layout();
                this._renderMeta();
                this._renderSales();
                this.reportLoader.loadWidgets(this.model.queryString);
                
                return this;
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

            _renderMeta: function () {
                var data = {
                    config: {},

                    results: this.model.get('report').totalStores,
                    title: "Stores"
                };
                var $overview = this.$el.find('.subsection').first().find('.widgets');
                $overview.append(templates['thirdchannel/reports/widgets/metric_icon'](data));
            },

            _renderSales: function () {
                this.$el.find('.sales-graph .widgets').append(templates['thirdchannel/labs/sales_compare/retail_sales']({sales: this.model.get('report').sales}));
                this._buildChart(this.model.get('report').sales);
            },

            _buildChart: function (list) {
                this._formatCents(list);
                var self = this;

                var labels = ['x'].concat(_.map(list, function (item) { return item.date; })),
                    points = ['Average Retail Sales ($USB)'].concat(_.map(list, function (item) { return item.rawUSD; }));


                this.chart = c3.generate(
                    {
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
                        },
                        bindto: self.$('.retail-sales')[0],
                        color: {
                            pattern: context.defaultLegendColors
                        }
                    });
            },

            _formatCents: function (list) {
                var i = 0,
                    max = list.length;
                for (i; i < max; i++) {
                    list[i].rawUSD = Math.round(list[i].cents/100);
                }
            }
        };
    return Backbone.View.extend(SalesCompareSideView);
});