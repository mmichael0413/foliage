define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        context = require('context'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        el: '.notifications',
        template: HandlebarsTemplates['thirdchannel/notifications/badge'],
        render: function () {
            var _this = this;
            $.ajax({
                url: '/programs/' + context.programId + '/notifications.json'
            })
                .done(function (data) {
                    if (data.count > 0) {
                        //console.log(data.count);
                        _this.$el.addClass('notify');
                        _this.$el.attr('title', 'Unread Notifications');
                        if (data.count == 1) {
                            _this.$('.link').text('Notification');
                        }
                        _this.$('.link').prepend(_this.template(data));

                        context.trigger('notification.badge.update', data);
                    }
                });
        }
    });
});