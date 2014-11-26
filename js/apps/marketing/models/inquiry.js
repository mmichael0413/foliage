define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Model.extend({
        urlRoot: '/inquiries',

        validate: function (attrs, options) {
            var errors = [];

            if (errors.length > 0) {
                return errors;
            }
        }
    });
});