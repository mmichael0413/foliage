define(function (require) {
    /**
     * Base view for validating a 3d registration form
     *
     * @exports thirdchannel/views/shared/validate_registration
     */

    require('jquery-validate');

    var Backbone = require('backbone'),
        context = require('context');

    return Backbone.View.extend({
        validateRegistrationForm: function () {
            $.validator.addMethod("validateZip", function (value, element) {
                var valid = false;
                var data = {address: value};
                $.ajax({
                    url: "//maps.googleapis.com/maps/api/geocode/json",
                    data: data,
                    async: false
                }).done(function (response) {
                    if (response.status === 'OK') {

                        for (var i = 0; i < response.results.length; i++) {
                            var addressComponents = response.results[i].address_components;
                            if (addressComponents) {
                                for (var j = 0; j < addressComponents.length; j++) {
                                    if (addressComponents[j].long_name == value || addressComponents[j].short_name == value) {
                                        if (Array.isArray(addressComponents[j].types)) {
                                            valid = valid || (addressComponents[j].types.indexOf("postal_code") >= 0);
                                        }
                                    }
                                }
                            }
                        }
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

                }).done(function (response) {
                    if (response.success === true) {
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
                    'user[password]': {
                        required: true,
                        minlength: 8
                    },
                    'user[password_confirmation]': {
                        required: true,
                        minlength: 8,
                        equalTo: "#password"
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