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

            var data = _.map(brands, function(brand) {
                return [brand.label, brand.salesChange];
            });
            
            var colors = {};
            _.each(brands, function(brand, i) {
               colors[brand.label] = defaultLegendColors[i % defaultLegendColors.length]
            });

            c3.generate({
                bindto: this.$('.chart')[0],
                data: {
                    columns: data,
                    colors: colors,
                    type: 'bar'
                },
                axis: {
                    rotated: true,
                    x: {
                        show: false
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
                }
            });
        }
    });

    return View;
});