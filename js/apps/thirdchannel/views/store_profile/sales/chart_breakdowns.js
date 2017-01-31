define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        c3 = require('c3'),
        Handlebars = require('handlebars'),
        string_utils = require('thirdchannel/utils/string_utils'),
        HandlebarsTemplates = require('handlebarsTemplates');


    var View = Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/store_profile/sales/chart_breakdowns'],

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.renderSalesPerBreakdown();
            this.renderChangeInSales();
            return this;
        },



        renderSalesPerBreakdown: function() {
            var store = this.model.get('store');
            var breakdowns = [];
            var graphHeight;

            if(this.model.get('breakdown_by') === 'category') {
                breakdowns = store.categories;
            } else {
                breakdowns = store.brands;
            }

            breakdowns = _.map(breakdowns, function(data, key) {
                        //Title Case the labels
                        data.label = string_utils.titleize(key);
                        data.percentageOfSales = (data.salesInCents / store.salesInCents) * 100;
                        return data;
            });
            breakdowns = _.filter(breakdowns, function(data) { return data.percentageOfSales !== null; });
            breakdowns = _.sortBy(breakdowns, 'percentageOfSales').reverse();

            graphHeight = this.getMaxGraphHeight(breakdowns.length);

            this.salesPerCategoryChart = c3.generate({
                bindto: this.$('#brand-percent-of-sales > .chart')[0],
                data: {
                    json: breakdowns,
                    keys: {
                        x: 'label',
                        value: ['percentageOfSales']
                    },
                    labels: {
                        format: function(value, key, i, j) {
                            var sales = 'N/A';
                            if(breakdowns[i] !== undefined && breakdowns[i].salesInCents) {
                                sales = '$' + (breakdowns[i].salesInCents / 100).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                            }
                            return parseFloat(value).toFixed(2) + '% (' + sales + ')';
                        }
                    },
                    color: function(color, d) {
                        return defaultLegendColors[d.index % defaultLegendColors.length];
                    },
                    type: 'bar'
                },
                tooltip: {
                    format: {
                        name: function(name, ratio, id, index) { return '% of Sales'; },
                        value: function(value, ratio, id, i) {
                            var sales = 'N/A';
                            if(breakdowns[i] !== undefined && breakdowns[i].salesInCents) {
                                sales = '$' + (breakdowns[i].salesInCents / 100).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                            }
                            return parseFloat(value).toFixed(2) + '% (' + sales + ')';
                        }
                    }
                },
                axis: {
                    rotated: true,
                    x: {
                        type: 'category',
                        tick: {
                            format: function(i) {
                                if(breakdowns[i] === undefined) {
                                    return;
                                }
                                return breakdowns[i].label;
                            }
                        }
                    },
                    y: {
                        padding: {
                            top: 75
                        }
                    }
                },
                bar: {
                    width: 30
                },
                grid: {
                    y: {
                        show: true
                    }
                },
                legend: {
                    show: false
                },
                size: {
                    height: graphHeight
                }
            });
        },

        renderChangeInSales: function() {
            var store = this.model.get('store');
            var breakdowns = [];
            var graphHeight;

            if(this.model.get('breakdown_by') === 'category') {
                breakdowns = store.categories;
            } else {
                breakdowns = store.brands;
            }

            breakdowns = _.map(breakdowns, function(data, key) {
                data.label = string_utils.titleize(key);
                return data;
            });
            breakdowns = _.filter(breakdowns, function(data) { return data.percentageOfSales !== null; });
            breakdowns = _.sortBy(breakdowns, 'percentageOfSales').reverse();

            graphHeight = this.getMaxGraphHeight(breakdowns.length);

            this.changeInSalesChart = c3.generate({
                bindto: this.$('#brand-change-in-sales > .chart')[0],
                data: {
                    json: breakdowns,
                    keys: {
                        x: 'label',
                        value: ['salesChange']
                    },
                    labels: {
                        format: function (value, key, i, j) {
                            var salesDiff = 'N/A';
                            if(breakdowns[i] !== undefined && breakdowns[i].salesDiff) {
                                salesDiff = '$' + (breakdowns[i].salesDiff / 100).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                            }
                            return parseFloat(value).toFixed(2) + '% (' + salesDiff + ')';
                        }
                    },
                    color: function(color, d) {
                        return context.defaultLegendColors[d.index % context.defaultLegendColors.length];
                    },
                    type: 'bar'
                },
                tooltip: {
                    format: {
                        name: function (name, ratio, id, index) { return 'Sales Change'; },
                        value: function (value, ratio, id, i) {
                            var salesDiff = 'N/A';
                            if(breakdowns[i] !== undefined && breakdowns[i].salesDiff !== undefined && breakdowns[i].salesDiff !== null) {
                                salesDiff = '$' + (breakdowns[i].salesDiff / 100).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                            }
                            return parseFloat(value).toFixed(2) + '% (' + salesDiff + ')';
                        }
                    }
                },
                axis: {
                    rotated: true,
                    x: {
                        type: 'category',
                        tick: {
                            format: function(i) {
                                if(breakdowns[i] === undefined) {
                                    return;
                                }
                                return breakdowns[i].label;
                            }
                        }
                    },
                    y: {
                        padding: {
                            top: 75
                        }
                    }
                },
                bar: {
                    width: 30
                },
                grid: {
                    y: {
                        show: true
                    }
                },
                legend: {
                    show: false
                },
                size: {
                    height: graphHeight
                }
            });
        },

        getMaxGraphHeight: function(itemLength) {
          /* 360 = default chart height
           * 36 = the height of the bar chart (30) + 2 px on either side
           * for the tick markers that the bars fit between, as well as 4px
           * additional spacing between rows.
           *
           * This means that when charts get larger than 360px,
           * the bars will be back to back and not overlapping.
           */
          return Math.max(itemLength * 36, 360);
        }

    });

    return View;
});
