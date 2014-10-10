define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        DashboardsAlertsGroupEvent = require('app/events/dashboards/alerts/group');

    return Backbone.View.extend({
        template: HandlebarsTemplates.alert,
        initialize: function (options) {
            this.options = options;
            this.model = options.model;
        },
        render: function () {
            var self = this;
            this.setElement(this.template(this.model.toJSON()));
            this.model.fetch({success: function (model) {
                self.$el.find(".alert-count").empty().text(model.get('count'));
                DashboardsAlertsGroupEvent.trigger('alert_group_' + self.options.groupId + ':count_update', model.get('count'));
            }});
            this.setGroupEvent();

            return this;
        },
        showView: function () {
            this.$el.removeClass('hide');
        },
        hideView: function () {
            this.$el.addClass('hide');
        },
        setGroupEvent: function () {
            if (this.options.groupId !== undefined) {
                DashboardsAlertsGroupEvent.on('alert_group_' + this.options.groupId + ':show', this.showView, this);
                DashboardsAlertsGroupEvent.on('alert_group_' + this.options.groupId + ':hide', this.hideView, this);
            }
        }
    });
});


