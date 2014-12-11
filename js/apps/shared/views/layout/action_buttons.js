define(function (require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplate = require('handlebarsTemplates'),
        HandlebarsHelpers = require('handlebarsHelpers'),
        context = require('context');

    return Backbone.View.extend({
        el: '#site-wrapper',
        template: HandlebarsTemplate['shared/layout/action_buttons'],
        initialize: function () {
            this.listenTo(context, 'notification.badge.update', this.updateNotificationBadge);
            if (window.bootstrap.buttons) {
                this.buttons = window.bootstrap.buttons;
            } else {
                return;
            }

            this.render();
        },
        render: function () {
            this.$('.actions').append(this.template({buttons: this.buttons}));

            return this;
        },
        updateNotificationBadge: function(data) {

            if(data.count > 0) {
                $('#actionNotification').text(data.count);
            }
        }
    });
});