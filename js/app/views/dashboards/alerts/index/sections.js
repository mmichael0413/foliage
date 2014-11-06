define(function(require) {
    var Backbone = require('backbone'),
        SectionsCollection = require('app/collections/dashboards/alerts/sections'),
        SectionView = require('app/views/dashboards/alerts/index/section'),
        FiltersCollection = require('app/collections/dashboards/alerts/index/filters'),
        Filter = require('app/views/filter/main');

    return Backbone.View.extend({
        className: "alerts-sections",
        initialize: function (options) {
            this.options = options;
            this.collection = new SectionsCollection({programId: options.programId});
            this.filters = new FiltersCollection({programId: options.programId});
        },
        render: function () {
            var self = this;
            this.filters.fetch({success: function (collection) {
                self.addFilters(collection);
            }});

            this.collection.fetch({success: function (collection) {
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


