define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        HandlebarsHelpers = require('handlebarsHelpers'),
        BarChartView = require('thirdchannel/views/reports/widgets/bar_chart'),
        DonutChartView = require('thirdchannel/views/reports/widgets/donut_chart'),
        HorizontalBarChartView = require('thirdchannel/views/reports/widgets/horizontal_bar_chart'),
        LeadingRowView = require('thirdchannel/views/reports/widgets/leading_row'),
        ListIconView = require('thirdchannel/views/reports/widgets/list_icon'),
        MetricIconView = require('thirdchannel/views/reports/widgets/metric_icon'),
        MultiQuestionTotalsView = require('thirdchannel/views/reports/widgets/multi_question_totals'),
        MultiQuestionCountsView = require('thirdchannel/views/reports/widgets/multi_question_counts'),
        OverviewIconView = require('thirdchannel/views/reports/widgets/overview_icon'),
        PercentIconView = require('thirdchannel/views/reports/widgets/percent_icon'),
        QuadrantChartView = require('thirdchannel/views/reports/widgets/quadrant_chart'),
        RangeChartView = require('thirdchannel/views/reports/widgets/range_chart'),
        ResolutionRowView = require('thirdchannel/views/reports/widgets/resolution_row'),
        LineChartView = require('thirdchannel/views/reports/widgets/line_chart'),
        GenericHorizontalBarChartView = require('thirdchannel/views/reports/widgets/generic_horizontal_bar_chart'),
        StackedBarChartView = require('thirdchannel/views/reports/widgets/stacked_bar_chart');

    return Backbone.View.extend({
        tagName: "span",
        defaultTemplate: HandlebarsTemplates['thirdchannel/reports/widgets/default'],
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            var widget = this.defaultTemplate(this.model);

            if (this.model.display_type == 1) {
                widget = this.createDonutChart();
            } else if (this.model.display_type == 2) {
                widget = this.createListIcon();
            } else if (this.model.display_type == 3) {
                widget = this.createPercentIcon();
            } else if (this.model.display_type == 4) {
                widget = this.createBarChart();
            } else if (this.model.display_type == 5) {
                widget = this.createMetricIcon();
            } else if (this.model.display_type == 6) {
                widget = this.createResolutionRow();
            } else if (this.model.display_type == 7) {
                widget = this.createOverviewIcon();
            } else if (this.model.display_type == 8) {
                widget = this.createHorizontalBarChart();
            } else if (this.model.display_type == 9) {
                widget = this.createRangeChart();
            } else if (this.model.display_type == 10) {
                widget = this.createMultiQuestionTotal();
            } else if (this.model.display_type == 11) {
                widget = this.createQuadrantChart();
            } else if (this.model.display_type == 12) {
                widget = this.createLeadingRow();
            } else if (this.model.display_type == 13) {
                widget = this.createMultiQuestionCount();
            } else if (this.model.display_type == 14) {
                widget = this.createLineChart();
            } else if (this.model.display_type == 15) {
                widget = this.createGenericHorizontalBarChart();
            } else if (this.model.display_type == 16) {
                widget = this.createHorizontalStackedBarChart();
            } else if (this.model.display_type == 17) {
                widget = this.createHeatmap();
            }

            this.setElement(widget);
            return this;
        },
        createDonutChart: function () {
            return new DonutChartView(this.model).render().$el;
        },
        createListIcon: function () {
            return new ListIconView(this.model).render().$el;
        },
        createBarChart: function () {
            return new BarChartView(this.model).render().$el;
        },
        createPercentIcon: function () {
            return new PercentIconView(this.model).render().$el;
        },
        createMetricIcon: function () {
            return new MetricIconView(this.model).render().$el;
        },
        createResolutionRow: function () {
            return new ResolutionRowView(this.model).render().$el;
        },
        createOverviewIcon: function () {
            return new OverviewIconView(this.model).render().$el;
        },
        createHorizontalBarChart: function () {
            return new HorizontalBarChartView(this.model).render().$el;
        },
        createRangeChart: function () {
            return new RangeChartView(this.model).render().$el;
        },
        createMultiQuestionTotal: function () {
            return new MultiQuestionTotalsView(this.model).render().$el;
        },
        createQuadrantChart: function () {
            return new QuadrantChartView(this.model).render().$el;
        },
        createLeadingRow: function () {
            return new LeadingRowView(this.model).render().$el;
        },
        createMultiQuestionCount: function () {
            return new MultiQuestionCountsView(this.model).render().$el;
        },
        createLineChart: function () {
            return new LineChartView(this.model).render().$el;
        },
        createGenericHorizontalBarChart: function () {
            return new GenericHorizontalBarChartView(this.model).render().$el;
        },
        createHorizontalStackedBarChart: function() {
            return new StackedBarChartView(this.model).render().$el;
        },
        createHeatmap: function() {
            return new HeatmapView(this.model).render().$el;
        }
    });
});