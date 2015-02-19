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

            nv.addGraph(function() {
                var chart = nv.models.lineWithFocusChart()
                    .x(function(d){return new Date(d.x)});

                chart.xAxis.tickFormat(function(d) { return d3.time.format('%b %d %Y')(new Date(d)); });
                chart.x2Axis.tickFormat(function(d) { return d3.time.format('%b %d %Y')(new Date(d)); });

                chart.xScale(d3.time.scale());

                chart.color(["rgba(88,94,96,0.2)", "rgba(241,95,81,0.2)", "#rgba(159,178,192,0.2)", "#rgba(169,188,77,0.2)"]);
                chart.isArea(true);

                chart.brushExtent([new Date(self.model.config.startDate), new Date(self.model.config.endDate)]);
                chart.margin({"left":50,"right":50,"top":50,"bottom":50});

                d3.select('.chart.line svg')
                    .datum(self.model.results)
                    .transition().duration(500)
                    .call(chart);

                nv.utils.windowResize(chart.update);

                return chart;
            });

            this.listenTo(context, 'report post render', function () {
                //chart.update;//new Chart(canvas[0].getContext("2d")).Line(self.data, {});
            });
        },

        updateViewBreakDownLink : function (qs) {

        }
    });
});