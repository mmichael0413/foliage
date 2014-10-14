define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        displayDonutChart = require('libs/charts/donut_chart');

    return Backbone.View.extend({
        tagName: 'span',
        template: HandlebarsTemplates.reports_widgets_donut_chart,
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            if (_.size(this.model.results.percentages) > 0) {
                this.setElement(this.template(this.model));
                displayDonutChart(this.$el.find("canvas")[0], this.model.results.percentages, this.model.config);
            }
            return this;
        }
    });
});