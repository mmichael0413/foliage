define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        EventListener = require('app/utils/eventListener');

    return Backbone.View.extend({
        template: HandlebarsTemplates['dashboards/alerts/index/alert'],
        initialize: function (options) {
            this.options = options;
            this.model = options.model;
        },
        render: function () {
            var self = this;
            this.setElement(this.template(this.model.toJSON()));
            this.model.fetch({success: function (model) {
                self.$el.find(".alert-count").empty().text(model.get('count'));
                EventListener.trigger('alert_group_' + self.options.groupId + ':count_update', model.get('count'));
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
                this.listenTo(EventListener, 'alert_group_' + this.options.groupId + ':show', this.showView, this);
                this.listenTo(EventListener, 'alert_group_' + this.options.groupId + ':hide', this.hideView, this);
            }
        }
    });
});


