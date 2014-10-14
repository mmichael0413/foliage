define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ReportWidgetView = require('app/views/reports/index/widget');

    return Backbone.View.extend({
        template: HandlebarsTemplates.reports_subsection,
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            var that = this;
            this.setElement(this.template(this.model));
            $.each(this.model.widgets, function (key, value) {
                that.addWidgets(that, value);
            });
            return this;
        },
        addWidgets: function (that, value) {
            that.$el.find('.widgets').append(new ReportWidgetView(value).render().$el);
        }
    });
});