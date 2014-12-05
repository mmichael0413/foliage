define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        SectionsCollection = require('thirdchannel/collections/dashboards/alerts/sections'),
        SectionView = require('thirdchannel/views/dashboards/alerts/index/section'),
        FiltersCollection = require('thirdchannel/collections/dashboards/alerts/index/filters'),
        Filter = require('thirdchannel/views/filter/main'),
        ExportView = require('thirdchannel/views/utils/export_button'),
        LoadingView = require('thirdchannel/views/utils/loading');

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


            $(".actions .export").each(function(){
                new ExportView({queryString: window.bootstrap}).render(this);
            });

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


