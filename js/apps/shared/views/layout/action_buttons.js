define(function (require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplate = require('handlebarsTemplates');

    return Backbone.View.extend({
        el: '#site-wrapper',
        template: HandlebarsTemplate['layout/action_buttons'],
        initialize: function () {
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
        }
    });
});