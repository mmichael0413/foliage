define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        Charts = require('chartjs'),
        EventListener = require('app/utils/eventListener');

    return Backbone.View.extend({
        tagName: 'span',
        template: HandlebarsTemplates['reports/widgets/horizontal_bar_chart'],
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            if (_.size(this.model.results.percentages) > 0) {
                this.setElement(this.template(this.model));
                this.canvas = this.$el.find("canvas");
                this.setupHorizontalBarChart();
                var self = this;
            }
            return this;
        },
        setupHorizontalBarChart: function () {
            this.chartOptions = _.extend({
                scaleFontSize: 14,
                animation: false,
                scaleShowLabels: true,
                scaleOverride: true,
                scaleSteps: 10,
                scaleStepWidth: 10,
                scaleStartValue: 0,
                inGraphDataShow: true,
                inGraphDataTmpl: "<%=v3+'%'%>",
                scaleLabel: "<%= value+'%' %>",
                horizontalBar: true,
                responsive: true,
                barValueSpacing: 10,
                maintainAspectRatio: false,
                showTooltips: true,
                tooltipTemplate: "<%= value+'%' %>"
            }, this.model.config);

            var labels = [];
            var fillColor = [];
            var strokeColor = [];
            var values = [];

            var that = this;

            $.each(this.chartOptions.legendOrder.reverse(), function (index, value) {
                labels.push(value);
                fillColor.push(that.chartOptions.legendColors[value]);
                strokeColor.push(that.chartOptions.legendColors[value]);
                values.push(that.model.results.percentages[value]);
            });

            this.data = {
                labels: labels,
                datasets: [
                    {
                        fillColor: fillColor,
                        strokeColor: strokeColor,
                        data: values,
                        title: "horizontal chart"
                    }
                ]
            };

            this.listenTo(EventListener, 'report post render', function () {
                new Chart(that.canvas[0].getContext("2d")).Bar(that.data, that.chartOptions);
            });
        }
    });
});