define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        DashboardsAlertsAlertModel = require('app/models/dashboards/alerts/alert'),
        DashboardsAlertsAlertsCollection = require('app/collections/dashboards/alerts/alerts'),
        DashboardsAlertsGroupView = require('app/views/dashboards/alerts/index/group'),
        DashboardsAlertsAlertView = require('app/views/dashboards/alerts/index/alert');

    return Backbone.View.extend({
        tagName: 'tbody',
        className: "alerts",
        template: HandlebarsTemplates.dashboard_alerts_index_alerts,
        loadingTemplate: HandlebarsTemplates.loading,
        initialize: function (options) {
            this.options = options;
            this.collection = new DashboardsAlertsAlertsCollection({programId: this.options.programId, id: this.options.id});
        },
        render: function () {
            var self = this;
            this.$el.html(this.loadingTemplate());
            this.collection.fetch({success: function (collection) {
                self.$el.empty();
                collection.each(function (model) {
                    if (model.get('type') == 'group') {
                        self.createAlertGroupView(model);
                    } else if (model.get('type') == 'alert') {
                        self.createAlertView(model);
                    }
                });
            }});
            return this;
        },
        createAlertGroupView: function (model) {
            var self = this;
            var groupId = model.get('id');
            this.$el.append(new DashboardsAlertsGroupView({groupId: groupId, model: model}).render().$el);
            _.each(model.get('alerts'), function (subModel) {
                subModel = new DashboardsAlertsAlertModel(subModel);
                self.$el.append(new DashboardsAlertsAlertView({programId: self.options.programId, groupId: groupId, model: subModel}).render().$el);
            });
        },
        createAlertView: function (model) {
            this.$el.append(new DashboardsAlertsAlertView({programId: this.options.programId, model: model}).render().$el);
        }
    });
});


