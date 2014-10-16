define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        EventListener = require('app/utils/eventListener'),
        displayDonutChart = require('libs/charts/donut_chart');

    return Backbone.View.extend({
        tagName: 'span',
        template: HandlebarsTemplates['reports/widgets/donut_chart'],
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            if (_.size(this.model.results.percentages) > 0) {
                this.setElement(this.template(this.model));
                displayDonutChart(this.$el.find("canvas")[0], this.model.results.percentages, this.model.config);
                this.listenTo(EventListener, 'filter:queryString', this.updateViewBreakDownLink);
                EventListener.trigger('filter:request:queryString');
            }
            return this;
        },
        updateViewBreakDownLink : function (qs) {
            var account = (this.model.report_filters.account !== undefined) ?  this.model.report_filters.account.id : 'all';
            this.$el.find('a.breakdown-link').attr("href", 'reports/' + account + '/info/' + this.model.widget_id + '?'+qs);
        }
    });
});