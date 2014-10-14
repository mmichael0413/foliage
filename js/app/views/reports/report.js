define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        EventListener = require('app/utils/eventListener'),
        ReportModel = require('app/models/reports/report'),
        ReportSectionView = require('app/views/reports/section');

    return Backbone.View.extend({
        el: ".report",
        loadingTemplate: HandlebarsTemplates.loading,
        initialize: function (options) {
            this.model = new ReportModel(options);
        },
        render: function (options) {
            var that = this;
            this.$el.append(this.loadingTemplate);
            if (window.reportData !== undefined) {
                $.each(window.reportData.sections, function (key, value) {
                    that.addSection(that.$el, value);
                });
                that.$el.find('.loading-section').remove();
                EventListener.trigger('report post render');
            } else {
                this.model.fetch({success: function (model) {
                    $.each(model.get('sections'), function (key, value) {
                        that.addSection(that.$el, value);
                    });
                    that.$el.find('.loading-section').remove();
                    EventListener.trigger('report post render');
                }});
            }
            return this;
        },
        addSection: function ($elem, value) {
            $elem.append(new ReportSectionView(value).render().$el);
        }
    });
});