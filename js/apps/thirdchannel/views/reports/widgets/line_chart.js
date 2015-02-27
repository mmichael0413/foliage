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

            new Chartist.Line(this.$('.ct-chart')[0], this.model.results, {
                lineSmooth: Chartist.Interpolation.simple({
                    divisor: 2
                }),
                showPoint: false,
                classNames: {
                    horizontal: 'ct-rotated'
                }
            });
        },

        updateViewBreakDownLink : function (qs) {

        }
    });
});