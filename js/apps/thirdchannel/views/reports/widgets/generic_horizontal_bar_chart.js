define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        Charts = require('chartjs'),
        ViewBreakdownLinkMixin = require('thirdchannel/views/reports/widgets/view_breakdown_link_mixin'),
        context = require('context');

    var view = Backbone.View.extend({
        tagName: 'span',
        template: HandlebarsTemplates['thirdchannel/reports/widgets/horizontal_bar_chart'],
        initialize: function (options) {
            this.model = options;

            this.model.results.values = this.model.results.values.reverse();
            this.model.results.counts = this.model.results.counts.reverse();
            this.model.results.legend = this.model.results.legend.reverse();

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
                showTooltips: false,
                tooltipTemplate: "<%= value+'%' %>",
                defaultLegendColors: ["#585E60", "#F15F51", "#9FB2C0", "#A9BC4D"]
            }, this.model.config);
        },
        render: function () {
            if (_.size(this.model.results.values) > 0) {
                this.$el.html(this.template(this.model));
                this.setupHorizontalBarChart();
                this.listenTo(context, 'filter:queryString', function(qs){ this.updateViewBreakDownLink(qs, this.model); });
                context.trigger('filter:request:queryString');
            }
            return this;
        },
        setupHorizontalBarChart: function () {
            var self = this,
                canvas = this.$el.find("canvas"),
                labels = [],
                fillColor = [],
                strokeColor = [],
                total_entries = this.model.results.legend.length - 1,
                length_length = this.chartOptions.defaultLegendColors.length,
                maxValue = Math.max.apply(Math, self.model.results.values);

            this.chartOptions.scaleStepWidth = maxValue / 10;

            $.each(this.model.results.legend, function(index, value) {
                var label = value;
                if(self.model.config.count_text !== undefined) {
                    label += "\n" + self.model.results.counts[index] + ' ' + self.model.config.count_text;
                }
                labels.push(label);

                if (self.chartOptions.legendColors !== undefined) {
                    fillColor.push(self.chartOptions.legendColors[value]);
                    strokeColor.push(self.chartOptions.legendColors[value]);
                } else {
                    fillColor.push(self.chartOptions.defaultLegendColors[(total_entries - index) % length_length]);
                    strokeColor.push(self.chartOptions.defaultLegendColors[(total_entries - index) % length_length]);
                }
            });

            this.data = {
                labels: labels,
                datasets: [
                    {
                        fillColor: fillColor,
                        strokeColor: strokeColor,
                        data: self.model.results.values,
                        title: "horizontal chart"
                    }
                ]
            };

            if(window.report_pdf === undefined) {
                this.listenTo(context, 'report post render', _.debounce(function () {
                    setTimeout(function() {
                        new Chart(canvas[0].getContext("2d")).Bar(self.data, self.chartOptions);
                    }, 500);
                }, 500));
            } else {
                this.listenTo(context, 'report post render', function() {
                    new Chart(canvas[0].getContext("2d")).Bar(self.data, self.chartOptions);
                });
            }
        }
    });
    _.extend(view.prototype, ViewBreakdownLinkMixin);
    return view;
});
