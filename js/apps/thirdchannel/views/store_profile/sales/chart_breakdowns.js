define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        c3 = require('c3'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    var defaultLegendColors = ["#F15F51", "#585E60", "#9FB2C0", "#A9BC4D"];

    var View = Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/store_profile/sales/chart_breakdowns'],

        render: function() {
            this.$el.html(this.template());
            this.renderSalesPerBrand();
            this.renderChangeInSales();
            return this;
        },

        renderSalesPerBrand: function() {
            var store = this.model.get('store');
            var brands = store.brands;

            brands = _.map(brands, function(data, key) {
                data.label = key;
                data.percentageOfSales = (data.salesInCents / store.salesInCents) * 100;
                return data;
            });
            brands = _.filter(brands, function(data) { return data.percentageOfSales !== null; });
            brands = _.sortBy(brands, 'percentageOfSales').reverse();

            this.salesPerBrandChart = c3.generate({
                bindto: this.$('#brand-percent-of-sales > .chart')[0],
                data: {
                    json: brands,
                    keys: {
                        x: 'label',
                        value: ['percentageOfSales']
                    },
                    labels: {
                        format: function(value, key, i, j) {
                            var sales = 'N/A';
                            if(brands[i] !== undefined && brands[i].salesInCents) {
                                sales = '$' + (brands[i].salesInCents / 100).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
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
                            if(brands[i] !== undefined && brands[i].salesInCents) {
                                sales = '$' + (brands[i].salesInCents / 100).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
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
                                if(brands[i] === undefined) {
                                    return;
                                }
                                return brands[i].label;
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
                    height: 360
                }
            });
        },

        renderChangeInSales: function() {
            var brands = this.model.get('store').brands;
            brands = _.map(brands, function(data, key) {
                data.label = key;
                return data;
            });
            brands = _.filter(brands, function(data) { return data.salesChange !== null; });
            brands = _.sortBy(brands, 'salesChange');

            this.changeInSalesChart = c3.generate({
                bindto: this.$('#brand-change-in-sales > .chart')[0],
                data: {
                    json: brands,
                    keys: {
                        x: 'label',
                        value: ['salesChange']
                    },
                    labels: {
                        format: function (value, key, i, j) {
                            var salesDiff = 'N/A';
                            if(brands[i] !== undefined && brands[i].salesDiff) {
                                salesDiff = '$' + (brands[i].salesDiff / 100).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                            }
                            return parseFloat(value).toFixed(2) + '% (' + salesDiff + ')';
                        }
                    },
                    color: function(color, d) {
                        return defaultLegendColors[d.index % defaultLegendColors.length];
                    },
                    type: 'bar'
                },
                tooltip: {
                    format: {
                        name: function (name, ratio, id, index) { return 'Sales Change'; },
                        value: function (value, ratio, id, i) {
                            var salesDiff = 'N/A';
                            if(brands[i] !== undefined && brands[i].salesDiff !== undefined && brands[i].salesDiff !== null) {
                                salesDiff = '$' + (brands[i].salesDiff / 100).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
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
                                if(brands[i] === undefined) {
                                    return;
                                }
                                return brands[i].label;
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
                    height: 360
                }
            });
        }
    });

    return View;
});