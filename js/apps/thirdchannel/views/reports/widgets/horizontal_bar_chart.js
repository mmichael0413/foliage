define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        Charts = require('chartjs'),
        context = require('context');

    return Backbone.View.extend({
        tagName: 'span',
        template: HandlebarsTemplates['thirdchannel/reports/widgets/horizontal_bar_chart'],
        initialize: function (options) {
            this.model = options;

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
            if (_.size(this.model.results.percentages) > 0) {
                this.$el.html(this.template(this.model));
                this.setupHorizontalBarChart();
                this.listenTo(context, 'filter:queryString', this.updateViewBreakDownLink);
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
                values = [],
                total_entries = this.chartOptions.legendOrder.length - 1,
                length_length = this.chartOptions.defaultLegendColors.length;

            $.each(this.chartOptions.legendOrder.reverse(), function (index, value) {
                var countText = self.model.config.count_text !== undefined ? self.model.config.count_text : 'stores';
                labels.push(value + "\n" + self.model.results.counts[value] + ' ' + countText );
                if (self.chartOptions.legendColors !== undefined) {
                    fillColor.push(self.chartOptions.legendColors[value]);
                    strokeColor.push(self.chartOptions.legendColors[value]);
                } else {
                    fillColor.push(self.chartOptions.defaultLegendColors[(total_entries - index) % length_length]);
                    strokeColor.push(self.chartOptions.defaultLegendColors[(total_entries - index) % length_length]);
                }

                values.push(self.model.results.percentages[value]);
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

            this.listenTo(context, 'report post render', _.debounce(function () {
                setTimeout(function() {
                    new Chart(canvas[0].getContext("2d")).Bar(self.data, self.chartOptions);
                }, 500);
            }, 500));
        },
        updateViewBreakDownLink : function (qs) {
            var account = (this.model.report_filters.account !== undefined) ?  this.model.report_filters.account.id : 'all';
            this.$el.find('a.breakdown-link').attr("href", 'reports/' + account + '/info/' + this.model.widget_id + '?'+qs);
        }
    });
});