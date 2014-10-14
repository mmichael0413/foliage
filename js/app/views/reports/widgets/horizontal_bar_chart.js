define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        Charts = require('libs/Chart'),
        EventListener = require('app/utils/eventListener');

    return Backbone.View.extend({
        tagName: 'span',
        template: HandlebarsTemplates.reports_widgets_horizontal_bar_chart,
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            if (_.size(this.model.results.percentages) > 0) {
                this.setElement(this.template(this.model));
                this.canvas = this.$el.find("canvas");
                this.setupHorizontalBarChart();
                var self = this;
                $(window).on('resize', function (event) {
                    self.displayHorizontalBarChart(self);
                });
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
                scaleLabel: "<%= value+'%' %>"
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

            this.maxHeight = (this.chartOptions.legendOrder.length * 26) + 50;
            this.screenPercent = this.$el.hasClass('print_50') ? 450 : this.$el.hasClass('print_66') ? 600 : 900;

            this.listenTo(EventListener, 'report post render', function () {
                that.displayHorizontalBarChart(that);
            });
        },
        displayHorizontalBarChart: function ($element) {
            $element.canvas[0].getContext("2d").clearRect(0, 0, $($element.canvas).width(), $($element.canvas).height());
            var width = $element.$el.width() || ($element.screenPercent);
            $($element.canvas).attr("width", width);
            $($element.canvas).attr("height", $element.maxHeight);
            new Chart($element.canvas[0].getContext("2d")).HorizontalBar($element.data, $element.chartOptions);
        }
    });
});