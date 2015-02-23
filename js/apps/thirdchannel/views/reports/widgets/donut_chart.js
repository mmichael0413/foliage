define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context');

    return Backbone.View.extend({
        tagName: 'span',
        template: HandlebarsTemplates['thirdchannel/reports/widgets/donut_chart'],
        initialize: function (options) {
            this.model = options;
            this.setDefaultColors();
        },
        render: function () {
            if (_.size(this.model.results.percentages) > 0) {
                this.setElement(this.template(this.model));
                this.displayChart();
                this.listenTo(context, 'filter:queryString', this.updateViewBreakDownLink);
                context.trigger('filter:request:queryString');
            }
            return this;
        },
        updateViewBreakDownLink : function (qs) {
            var account = (this.model.report_filters.account !== undefined) ?  this.model.report_filters.account.id : 'all';
            this.$el.find('a.breakdown-link').attr("href", 'reports/' + account + '/info/' + this.model.widget_id + '?'+qs);
        },
        displayChart: function() {
            var options = _.extend({
                segmentShowStroke: false,
                percentageInnerCutout: 65,
                showPercentage: false,
                showImage: false,
                animation: false,
                legendColors: {'Yes': '#3FB586', 'No': '#d6d6d6', 'Maybe': 'red'},
                tooltipTemplate: "<%= value+'%' %>"
            }, this.model.config);

            var data = [];

            $.each(this.model.results.percentages, function (key, value) {
                data.push({value: value, color: options.legendColors[key]});
            });

            new Chart(this.$("canvas")[0].getContext("2d")).Doughnut(data, options);
        },
        setDefaultColors: function() {
            if (this.model.config.legendColors === undefined) {
                var that = this;
                this.model.config.legendColors = {};
                _.each(this.model.config.legendOrder, function(value, index) {
                    that.model.config.legendColors[value] = ["#585E60", "#F15F51", "#9FB2C0", "#A9BC4D", "#3FB586", '#D6D6D6'][index%6];
                });
            }
        }
    });
});