define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Model.extend({
        urlRoot: '/inquiries',

        validate: function(attrs, options) {
            var errors = [];

            if(!attrs.name || attrs.name.trim() === '') {
                errors.push({name: 'required'});
            }

            var emailRegEx = /^[A-Za-z]([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(!attrs.email || attrs.email.trim() === '') {
                errors.push({email: 'required'});
            } else if(!emailRegEx.test(attrs.email)) {
                errors.push({email: 'format'});
            }

            if(!attrs.company || attrs.company.trim() === '') {
                errors.push({company: 'required'});
            }

            if(!attrs.message || attrs.message.trim() === '') {
                errors.push({message: 'required'});
            }

            if (errors.length > 0) {
                return errors;
            }
        }
    });
});