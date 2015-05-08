define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        ReportModel = require('thirdchannel/models/reports/report'),
        ReportFilterCollection = require('thirdchannel/collections/reports/filters'),
        Filter = require('thirdchannel/views/filter/main'),
        LoadingView = require('thirdchannel/views/utils/loading'),
        ReportSectionView = require('thirdchannel/views/reports/index/section');

    return Backbone.View.extend({
        el: ".report",
        initialize: function (options) {
            this.model = new ReportModel($.extend(options, {queryString: window.bootstrap}));
            this.filters = new ReportFilterCollection(options);
            this.listenTo(context, 'filter:query', this.applyFilter);
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
                this.listenTo(context, 'filter-toggled:complete', _.debounce(function() {
                    setTimeout(function() {
                        self.triggerResize();
                    }, 500);
                }, 500));
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
            context.trigger('report post render');
        },
        triggerResize: function() {
            context.trigger('report resize');
        }
    });
});