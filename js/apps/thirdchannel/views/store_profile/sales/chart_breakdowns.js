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
            this.renderChangeInSales();
            return this;
        },

        renderChangeInSales: function() {
            var brands = this.model.get('store').brands;
            brands = _.map(brands, function(data, key) {
                data.label = key;
                return data;
            });
            brands = _.filter(brands, function(data) { return data.salesChange !== null });
            brands = _.sortBy(brands, 'salesChange');

            c3.generate({
                bindto: this.$('.chart')[0],
                data: {
                    json: brands,
                    keys: {
                        x: 'label',
                        value: ['salesChange']
                    },
                    labels: {
                        format: function (value, key, i, j) {
                            var salesDiff = 'N/A';
                            if(brands[i] !== undefined && brands[i].salesDiff !== undefined && brands[i].salesDiff !== null) {
                                salesDiff = '$' + brands[i].salesDiff.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
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
                                salesDiff = '$' + brands[i].salesDiff.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
                            }
                            return parseFloat(value).toFixed(2) + '% (' + salesDiff + ')';
                        }
                    }
                },
                axis: {
                    rotated: true,
                    x: {
                        type: 'category'
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
                }
            });
        }
    });

    return View;
});