define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        EventListener = require('app/utils/eventListener'),
        ReportModel = require('app/models/reports/report'),
        ReportFilterCollection = require('app/collections/reports/filters'),
        Filter = require('app/views/filter/main'),
        LoadingView = require('app/views/utils/loading'),
        ReportSectionView = require('app/views/reports/index/section');

    return Backbone.View.extend({
        el: ".report",
        initialize: function (options) {
            this.model = new ReportModel(options);
            this.filters = new ReportFilterCollection(options);
            this.listenTo(EventListener, 'filter:query', this.applyFilter);
            this.loadingView = new LoadingView();
        },
        render: function (options) {
            var self = this;
            if (window.reportData !== undefined) {
                $.each(window.reportData.sections, function (key, value) {
                    self.addSection(self.$el, value);
                });
                self.triggerPostRender();
            } else {
                this.$el.append(this.loadingView.render().$el);
                this.filters.fetch({success: function (collection) {
                    self.addFilters(collection);
                }});
                this.model.fetch({success: function (model) {
                    self.constructView(model);
                }});
            }
            return this;
        },
        addSection: function ($elem, value) {
            $elem.append(new ReportSectionView(value).render().$el);
        },
        addFilters: function (value) {
            Filter.init(value);
        },
        constructView: function(model) {
            var self = this;
            $.each(model.get('sections'), function (key, value) {
                self.addSection(self.$el, value);
            });
            self.triggerPostRender();
            this.loadingView.remove();
        },
        applyFilter: function (qs) {
            var that = this;
            this.$el.empty();
            this.$el.append(this.loadingView.render().$el);
            this.model.queryString = qs;
            this.model.fetch({success: function (model) {
                that.constructView(model);
            }});
        },
        triggerPostRender: function() {
            EventListener.trigger('report post render');
        }
    });
});