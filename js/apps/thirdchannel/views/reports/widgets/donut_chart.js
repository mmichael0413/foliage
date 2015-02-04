define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        displayDonutChart = require('donut_chart');

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
                displayDonutChart(this.$el.find("canvas")[0], this.model.results.percentages, this.model.config);
                this.listenTo(context, 'filter:queryString', this.updateViewBreakDownLink);
                context.trigger('filter:request:queryString');
            }
            return this;
        },
        updateViewBreakDownLink : function (qs) {
            var account = (this.model.report_filters.account !== undefined) ?  this.model.report_filters.account.id : 'all';
            this.$el.find('a.breakdown-link').attr("href", 'reports/' + account + '/info/' + this.model.widget_id + '?'+qs);
        },
        setDefaultColors: function() {
            if (this.model.config.legendColors === undefined) {
                var that = this;
                this.model.config.legendColors = {};
                _.each(this.model.config.legendOrder, function(value, index) {
                    that.model.config.legendColors[value] = ["#585E60", "#F15F51", "#9FB2C0", "#A9BC4D"][index%4]
                });
            }
        }
    });
});