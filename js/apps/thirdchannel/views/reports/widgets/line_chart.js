define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        Charts = require('chartjs'),
        context = require('context'),
        NVD3 = require('nvd3');

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
            var self = this;
            this.$svg = this.$('.chart svg');

            nv.addGraph(function() {
                var chart = nv.models.lineChart()
                    .x(function(d){return new Date(d.x)})
                    .useInteractiveGuideline(true)
                    .xScale(d3.time.scale())
                    .color(["#a53426", "#f15f51", "#f79e88", "#fcdcd0", "#454547", "#575d5f", "#8c8d8e", "#cfcece", "#413e98", "#8079b8",
                            "#ccc9e4", "#025832", "#00a55a", "#85c194", "#d4e6d7", "#463323", "#705b4d", "#a3866f", "#deb99a", "#ffcd3c",
                            "#ffe8b1", "#4cc3f1", "#bce4f9", "#ef6222", "#f69d6d", "#b18b2e", "#255c71", "#8ab2ca", "#702f14", "#fddcc7"])
                    .isArea(true)
                    .margin({"left":50,"right": 50,"top":25,"bottom":75});

                var dateFormat = (self.model.config.showDay) ? '%m/%d/%Y' : '%b %Y';

                chart.xAxis.tickFormat(function(d) { return d3.time.format(dateFormat)(new Date(d)); }).rotateLabels(-45);

                chart.yAxis.tickFormat(function(d) {
                    var ret = d3.format(',f')(d);
                    ret = ((self.model.config.y_prefix) !== undefined) ? self.model.config.y_prefix + ret : ret;
                    ret = ((self.model.config.y_postfix) !== undefined) ? ret + self.model.config.y_postfix : ret;
                    return ret;
                });

                if (_.size(self.model.results) == 1) {
                    chart.showLegend(false);
                }

                d3.select(self.$svg[0])
                  .datum(self.model.results)
                  .call(chart);

                self.listenTo(context, 'report post render', function () {
                    chart.update;
                });

                return chart;
            });
        },

        updateViewBreakDownLink : function (qs) {

        }
    });
});