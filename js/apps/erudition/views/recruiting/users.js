define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        templates = require('handlebarsTemplates'),
        Users = require('erudition/collections/users');

    return Backbone.View.extend({
        el: '.content',

        viewTemplate: templates['erudition/recruiting/users/index'],
        userListTemplate: templates['erudition/recruiting/users/users_list'],

        initialize: function () {
            this.collection = new Users();
        },

        render: function () {
            this.$el.append(this.viewTemplate());
            this.collection.fetch({success: function (collection) {
                this.$('#users-list').html(this.userListTemplate(collection.toJSON()));
            }.bind(this)});
            return this;
        }
    });
});