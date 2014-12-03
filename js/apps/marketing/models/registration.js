define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Model.extend({
        urlRoot: '/register',

        validate: function(attrs, options) {
            var errors = [];

            if(!attrs.first_name || attrs.first_name.trim() === '') {
                errors.push({first_name: 'This field is required.'});
            }

            if(!attrs.last_name || attrs.last_name.trim() === '') {
                errors.push({last_name: 'This field is required.'});
            }

            var emailRegEx = /^[A-Za-z]([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(!attrs.email || attrs.email.trim() === '') {
                errors.push({email: 'This field is required.'});
            } else if(!emailRegEx.test(attrs.email)) {
                errors.push({email: 'Please enter a valid email address.'});
            }

            if(!attrs.password || attrs.password.trim() === '') {
                errors.push({password: 'This field is required.'});
            } else if(attrs.password.length < 8) {
                errors.push({password: 'Please enter at least 8 characters.'});

                if(!attrs.password_confirmation ||
                    attrs.password_confirmation.trim() === '' ||
                    attrs.password !== attrs.password_confirmation) {
                    errors.push({password_confirmation: 'Please enter the same value again.'});
                }
            }

            if (errors.length > 0) {
                return errors;
            }
        },

        toJSON: function(options) {
            var data = {},
                attrs = _.clone(this.attributes);

            data['user'] = attrs;

            return data;
        }
    });
});