define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        templates = require('handlebarsTemplates');

    return Backbone.View.extend({
        el: '.content',

        viewTemplate: templates['erudition/recruiting/users/list'],

        initialize: function () {
            this.collection = context;
        },

        render: function () {
            this.$el.append(this.viewTemplate(this.collection));
            return this;
        }
    });
});