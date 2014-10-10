define(function(require) {
    var Backbone = require('backbone'),
        DashboardsAlertsSectionsCollection = require('app/collections/dashboards/alerts/sections'),
        DashboardsAlertsSectionView = require('app/views/dashboards/alerts/index/section');

    return Backbone.View.extend({
        className: "alerts-sections",
        initialize: function (options) {
            this.options = options;
            this.collection = new DashboardsAlertsSectionsCollection({programId: this.options.programId});
        },
        render: function () {
            var self = this;
            this.collection.fetch({success: function (collection) {
                collection.each(function (model) {
                    self.$el.append(new DashboardsAlertsSectionView({programId: self.options.programId, model: model}).render().$el);
                });
            }});
            return this;
        }
    });
});


