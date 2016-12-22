define(function (require) {
    require('jquery-validate');

    var ValidateRegistration = require('thirdchannel/views/shared/validate_registration'),
        Backbone = require('backbone'),
        context = require('context'),
        templates = require('handlebarsTemplates');

    return ValidateRegistration.extend({
        el: '.form-container',

        registrationTemplate: templates['thirdchannel/authentication/register'],
        loginTemplate: templates['thirdchannel/authentication/login'],
        initialize: function () {
            this.authToken = this.$('input[name=authenticity_token]').val();
            this.listenTo(this, 'setupValidation', this.validateRegistrationForm);
        },

        events: {
            'click .sign-up': 'displaySignUpForm',
            'click .login': 'displayLoginForm'
        },

        displaySignUpForm: function (e) {
            e.preventDefault();

            this.$el.html(this.registrationTemplate());
            this.trigger('setupValidation');
        },

        displayLoginForm: function (e) {
            e.preventDefault();
            this.$el.html(this.loginTemplate({authToken: this.authToken}));
        }

    });
});
