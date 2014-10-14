define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ReportSubsectionView = require('app/views/reports/index/subsection');

    return Backbone.View.extend({
        template: HandlebarsTemplates.reports_section,
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            var that = this;
            this.setElement(this.template(this.model));
            $.each(this.model.subsections, function (key, value) {
                that.addSubsection(that, value);
            });
            return this;
        },
        addSubsection: function (that, value) {
            that.$el.find('.subsections').append(new ReportSubsectionView(value).render().$el);
        }
    });
});