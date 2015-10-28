define(function (require) {
    var Backbone = require('backbone'),
        templates = require('handlebarsTemplates');

    return Backbone.View.extend({
        el: '.banner',
        template: templates['erudition/profile/banner'],
        initialize: function (options) {
            this.person = options.person;
        },

        render: function () {
            this.$el.append(this.template({person: this.person}));
        }
    });
});