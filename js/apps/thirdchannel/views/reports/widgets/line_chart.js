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
                var chart = nv.models.lineWithFocusChart()
                    .x(function(d){return new Date(d.x)}),
                    dateFormat;

                dateFormat = (self.model.config.showDay) ? '%b %d %Y' : '%b %Y'

                chart.xAxis.tickFormat(function(d) { return d3.time.format(dateFormat)(new Date(d)); }).rotateLabels(-45);
                chart.x2Axis.tickFormat(function(d) { return d3.time.format(dateFormat)(new Date(d)); });

                //chart.yAxis.tickFormat(function(d) { return self.model.config.prefix + d + self.model.config.postfix; });
                //chart.y2Axis.tickFormat(function(d) { return self.model.config.prefix + d + self.model.config.postfix; });

                chart.xScale(d3.time.scale());

                chart.color(["rgba(241,95,81,1)", "#rgba(159,178,192,1)", "rgba(88,94,96,1)", "#rgba(169,188,77,1)"]);
                chart.isArea(true);

                chart.margin({"left":50,"right":50,"top":0,"bottom":75});

                d3.select(self.$svg[0])
                    .datum(self.model.results)
                    .call(chart);

                //nv.utils.windowResize(chart.update);

                self.listenTo(context, 'report post render', function () {
                    chart.update;//new Chart(canvas[0].getContext("2d")).Line(self.data, {});
                });

                return chart;
            });
        },

        updateViewBreakDownLink : function (qs) {

        }
    });
});