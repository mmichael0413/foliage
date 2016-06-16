define(function (require) {
    require('jquery-validate');

    var Backbone = require('backbone'),
        context = require('context'),
        templates = require('handlebarsTemplates');

    return Backbone.View.extend({
        el: '.content',
        template: templates['erudition/profile/security'],

        render: function () {
            this.$el.append(this.template(context.content));
            this.beginValidation();
            return this;
        },

        beginValidation: function () {
            this.$('.profile-form').validate({
                rules: {
                    current_password: {
                        required: true,
                        minlength: 8
                    },
                    password: {
                        required: true,
                        minlength: 8
                    },
                    password_confirmation: {
                        equalTo: "#password",
                        required: true,
                        minlength: 8
                    }
                }
            });
        }
    });
});