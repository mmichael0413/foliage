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
            var $chart = this.$('.ct-chart'),
                self = this,
                config = this.model.config;

            new Chartist.Line($chart[0], this.model.results, {
                lineSmooth: Chartist.Interpolation.simple({
                    divisor: 2
                }),
                fullWidth: true,
                showPoint: true,
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

            // Tooltips
            var $tooltip = $chart.append('<div class="ct-tooltip"></div>').find('.ct-tooltip').hide();

            $chart.on('mouseenter', '.ct-point', function(e) {
                var $point = $(this),
                    value = $point.attr('ct:value');

                if(config.tooltip_prefix) {
                    value = config.tooltip_prefix + value;
                }

                if(config.tooltip_postfix) {
                    value = value + config.tooltip_postfix;
                }

                $tooltip.html(value).show();
            });

            $chart.on('mouseleave', '.ct-point', function(e) {
                $tooltip.hide().empty();
            });

            $chart.on('mousemove', function(e) {
                $tooltip.css({
                    left: (e.offsetX || e.originalEvent.layerX) - ($tooltip.width() / 2) - 4,
                    top: (e.offsetY || e.originalEvent.layerY) - ($tooltip.height() + 28)
                });
            });
        },

        updateViewBreakDownLink : function (qs) {

        }
    });
});