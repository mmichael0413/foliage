define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        tagName: 'span',
        template: HandlebarsTemplates.reports_widgets_quadrant_chart,
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            if (_.size(this.model.results.percentages) > 0) {
                this.setElement(this.template(this.model));
            }
            return this;
        }
    });
});