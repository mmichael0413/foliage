define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        SectionsCollection = require('app/collections/dashboards/alerts/sections'),
        SectionView = require('app/views/dashboards/alerts/index/section'),
        FiltersCollection = require('app/collections/dashboards/alerts/index/filters'),
        Filter = require('app/views/filter/main'),
        LoadingView = require('app/views/utils/loading');

    return Backbone.View.extend({
        className: "alerts-sections",
        initialize: function (options) {
            this.options = options;
            this.collection = new SectionsCollection({programId: options.programId});
            this.filters = new FiltersCollection({programId: options.programId});
            this.loadingView = new LoadingView();
        },
        render: function () {
            var self = this;

            this.$el.html(this.loadingView.render().$el);

            if(!context.instances.dashboardCountFilters) {
                context.instances.dashboardCountFilters = this.filters;
                this.filters.fetch({success: function (collection) {
                    self.addFilters(collection);
                }});
            }

            this.collection.fetch({success: function (collection) {
                self.loadingView.remove();
                collection.each(function (model) {
                    self.$el.append(new SectionView({programId: self.options.programId, model: model}).render().$el);
                });
            }});
            return this;
        },
        addFilters: function (value) {
            Filter.init(value);
        }
    });
});


