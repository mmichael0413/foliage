define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        HandlebarsHelpers = require('handlebarsHelpers'),
        ReportWidgetBarChartView = require('thirdchannel/views/reports/widgets/bar_chart'),
        ReportWidgetDonutChartView = require('thirdchannel/views/reports/widgets/donut_chart'),
        ReportWidgetHorizontalBarChartView = require('thirdchannel/views/reports/widgets/horizontal_bar_chart'),
        ReportWidgetLeadingRowView = require('thirdchannel/views/reports/widgets/leading_row'),
        ReportWidgetListIconView = require('thirdchannel/views/reports/widgets/list_icon'),
        ReportWidgetMetricIconView = require('thirdchannel/views/reports/widgets/metric_icon'),
        ReportWidgetMultiQuestionTotalsView = require('thirdchannel/views/reports/widgets/multi_question_totals'),
        ReportWidgetOverviewIconView = require('thirdchannel/views/reports/widgets/overview_icon'),
        ReportWidgetPercentIconView = require('thirdchannel/views/reports/widgets/percent_icon'),
        ReportWidgetQuadrantChartView = require('thirdchannel/views/reports/widgets/quadrant_chart'),
        ReportWidgetRangeChartView = require('thirdchannel/views/reports/widgets/range_chart'),
        ReportWidgetResolutionRowView = require('thirdchannel/views/reports/widgets/resolution_row');

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
            }

            this.setElement(widget);
            return this;
        },
        createDonutChart: function () {
            return new ReportWidgetDonutChartView(this.model).render().$el;
        },
        createListIcon: function () {
            return new ReportWidgetListIconView(this.model).render().$el;
        },
        createBarChart: function () {
            return new ReportWidgetBarChartView(this.model).render().$el;
        },
        createPercentIcon: function () {
            return new ReportWidgetPercentIconView(this.model).render().$el;
        },
        createMetricIcon: function () {
            return new ReportWidgetMetricIconView(this.model).render().$el;
        },
        createResolutionRow: function () {
            return new ReportWidgetResolutionRowView(this.model).render().$el;
        },
        createOverviewIcon: function () {
            return new ReportWidgetOverviewIconView(this.model).render().$el;
        },
        createHorizontalBarChart: function () {
            return new ReportWidgetHorizontalBarChartView(this.model).render().$el;
        },
        createRangeChart: function () {
            return new ReportWidgetRangeChartView(this.model).render().$el;
        },
        createMultiQuestionTotal: function () {
            return new ReportWidgetMultiQuestionTotalsView(this.model).render().$el;
        },
        createQuadrantChart: function () {
            return new ReportWidgetQuadrantChartView(this.model).render().$el;
        },
        createLeadingRow: function () {
            return new ReportWidgetLeadingRowView(this.model).render().$el;
        }
    });
});