define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        HandlebarsHelpers = require('handlebarsHelpers'),
        SharedMixin = require('thirdchannel/views/reports/widgets/shared_mixin'),
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
        StackedBarChartView = require('thirdchannel/views/reports/widgets/stacked_bar_chart'),
        HeatmapView = require('thirdchannel/views/reports/widgets/heatmap'),
        TotalsAveragesTableView = require('thirdchannel/views/reports/widgets/totals_averages_table'),
        LegendView = require('thirdchannel/views/reports/widgets/legend');

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
            } else if (this.model.display_type == 18) {
                widget = this.createTotalsAveragesTable();
            } else if (this.model.display_type == 19) {
                widget = this.createLegend();
            }

            this.setElement(widget);
            return this;
        },
        createDonutChart: function () {
            _.extend(DonutChartView.prototype, SharedMixin);
            var view = new DonutChartView(this.model);
            return view.render().$el;
        },
        createListIcon: function () {
            _.extend(ListIconView.prototype, SharedMixin);
            var view = new ListIconView(this.model);
            return view.render().$el;
        },
        createBarChart: function () {
            _.extend(BarChartView.prototype, SharedMixin);
            var view = new BarChartView(this.model);
            return view.render().$el;
        },
        createPercentIcon: function () {
            _.extend(PercentIconView.prototype, SharedMixin);
            var view = new PercentIconView(this.model);
            return view.render().$el;
        },
        createMetricIcon: function () {
            _.extend(MetricIconView.prototype, SharedMixin);
            var view = new MetricIconView(this.model);
            return view.render().$el;
        },
        createResolutionRow: function () {
            _.extend(ResolutionRowView.prototype, SharedMixin);
            var view = new ResolutionRowView(this.model);
            return view.render().$el;
        },
        createOverviewIcon: function () {
            _.extend(OverviewIconView.prototype, SharedMixin);
            var view = new OverviewIconView(this.model);
            return view.render().$el;
        },
        createHorizontalBarChart: function () {
            _.extend(HorizontalBarChartView.prototype, SharedMixin);
            var view = new HorizontalBarChartView(this.model);
            return view.render().$el;
        },
        createRangeChart: function () {
            _.extend(RangeChartView.prototype, SharedMixin);
            var view = new RangeChartView(this.model);
            return view.render().$el;
        },
        createMultiQuestionTotal: function () {
            _.extend(MultiQuestionTotalsView.prototype, SharedMixin);
            var view = new MultiQuestionTotalsView(this.model);
            return view.render().$el;
        },
        createQuadrantChart: function () {
            _.extend(QuadrantChartView.prototype, SharedMixin);
            var view = new QuadrantChartView(this.model);
            return view.render().$el;
        },
        createLeadingRow: function () {
            _.extend(LeadingRowView.prototype, SharedMixin);
            var view = new LeadingRowView(this.model);
            return view.render().$el;
        },
        createMultiQuestionCount: function () {
            _.extend(MultiQuestionCountsView.prototype, SharedMixin);
            var view = new MultiQuestionCountsView(this.model);
            return view.render().$el;
        },
        createLineChart: function () {
            _.extend(LineChartView.prototype, SharedMixin);
            var view = new LineChartView(this.model);
            return view.render().$el;
        },
        createGenericHorizontalBarChart: function () {
            _.extend(GenericHorizontalBarChartView.prototype, SharedMixin);
            var view = new GenericHorizontalBarChartView(this.model);
            return view.render().$el;
        },
        createHorizontalStackedBarChart: function() {
            _.extend(StackedBarChartView.prototype, SharedMixin);
            var view = new StackedBarChartView(this.model);
            return view.render().$el;
        },
        createHeatmap: function() {
            _.extend(HeatmapView.prototype, SharedMixin);
            var view = new HeatmapView(this.model);
            return view.render().$el;
        },
        createTotalsAveragesTable: function() {
            _.extend(TotalsAveragesTableView.prototype, SharedMixin);
            var view = new TotalsAveragesTableView(this.model);
            return view.render().$el;
        },
        createLegend: function() {
            _.extend(LegendView.prototype, SharedMixin);
            var view = new LegendView(this.model);
            return view.render().$el;
        }
    });
});
