define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        EventListener = require('app/utils/eventListener'),
        ReportModel = require('app/models/reports/report'),
        ReportFilterModel = require('app/models/reports/filters'),
        FiltersView = require('app/views/utils/filters'),
        ReportSectionView = require('app/views/reports/index/section');

    return Backbone.View.extend({
        el: ".report",
        loadingTemplate: HandlebarsTemplates.loading,
        initialize: function (options) {
            this.model = new ReportModel(options);
            this.filters = new ReportFilterModel(options);
            this.listenTo(EventListener, 'filter:query', this.applyFilter);
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
                this.filters.fetch({success: function (model) {
                    that.addFilters(model.toJSON());
                }});
                this.model.fetch({success: function (model) {
                    that.constructView(model);
                    EventListener.trigger('report post render');
                }});
            }
            return this;
        },
        addSection: function ($elem, value) {
            $elem.append(new ReportSectionView(value).render().$el);
        },
        addFilters: function (value) {
            new FiltersView({filters: value}).render();
        },
        constructView: function(model) {
            var that = this;
            $.each(model.get('sections'), function (key, value) {
                that.addSection(that.$el, value);
            });
            that.$el.find('.loading-section').remove();
        },
        applyFilter: function (qs) {
            var that = this;
            this.$el.empty();
            this.$el.append(this.loadingTemplate);
            this.model.queryString = qs;
            this.model.fetch({success: function (model) {
                that.constructView(model);
            }});
        }
    });
});