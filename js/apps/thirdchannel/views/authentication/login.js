define(function (require) {
    require('jquery-validate');

    var Backbone = require('backbone'),
        context = require('context'),
        templates = require('handlebarsTemplates');

    return Backbone.View.extend({
        el: '.login-container',

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
        },

        validateRegistrationForm: function () {
            $.validator.addMethod("validateZip", function (value, element) {
                var valid = false;
                var data = {address: value};
                $.ajax({
                    url: "//maps.googleapis.com/maps/api/geocode/json",
                    data: data,
                    async: false
                }).done(function(response){
                    if(response.status === 'OK') {
                        valid = true;
                    }
                });

                return valid;
            }, "Please enter a valid zip code.");

            $.validator.addMethod("validateEmail", function (value, element) {
                var valid = false;
                var data = {email: value};
                $.ajax({
                    url: "/email.json",
                    data: data,
                    async: false

                }).done(function(response){
                    if(response.success === true) {
                        valid = true;
                    }
                });

                return valid;
            }, "This email address has already been taken.");


            $('#registration-form').validate({
                rules: {
                    'user[first_name]': {
                        required: true
                    },
                    'user[last_name]': {
                        required: true
                    },
                    'user[email]': {
                        required: true,
                        email: true,
                        validateEmail: true
                    },
                    'user[password]' : {
                        required: true,
                        minlength : 8
                    },
                    'user[password_confirmation]' : {
                        required: true,
                        minlength : 8,
                        equalTo : "#password"
                    },
                    'user[zip]': {
                        required: true,
                        digits: true,
                        maxlength: 5,
                        validateZip: true
                    }
                },
                messages: {
                    'user[email]': {
                        email: 'Please enter a valid email address'
                    },
                    'user[password_confirmation]': {
                        equalTo: "These passwords don't match. Try again?"
                    }
                }
            });
        }
    });
});