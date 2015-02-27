define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        Chartist = require('chartist');

    return Backbone.View.extend({
        tagName: 'span',
        template: HandlebarsTemplates['thirdchannel/reports/widgets/line_chart'],
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            if (_.size(this.model.results) > 0) {
                this.$el.html(this.template(this.model));
                this.setupChart();
            }
            return this;
        },
        setupChart: function () {
            var self = this,
                config = this.model.config;

            new Chartist.Line(this.$('.ct-chart')[0], this.model.results, {
                lineSmooth: Chartist.Interpolation.simple({
                    divisor: 2
                }),
                showPoint: false,
                axisY: {
                    offset: 50,
                    labelInterpolationFnc: function(value) {
                        if(config.y_prefix) {
                            value = config.y_prefix + value;
                        }
                        if(config.y_postfix) {
                            value = value + config.y_postfix;
                        }
                        return value;
                    }
                },
                axisX: {
                    labelOffset: {
                        x: -50,
                        y: 5
                    }
                },
                classNames: {
                    horizontal: 'ct-rotated'
                }
            });
        },

        updateViewBreakDownLink : function (qs) {

        }
    });
});