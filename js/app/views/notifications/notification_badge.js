define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        el: '.notifications',
        template: HandlebarsTemplates['notifications/badge'],
        render: function () {
            var _this = this;
            $.ajax({
                url: '/programs/Merchandising/notifications.json'
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

                    }
                });
        }
    });
});