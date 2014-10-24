define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context');

    return Backbone.Model.extend({
        containsFilter: false,
        filters: [],
        paramRoot: 'message',

        url: function () {
            return '/programs/' + context.programId + '/messages'
        },
        validate: function (attrs, options) {
            var errors = [];


            if (attrs['message[subject]'] === '') {
                errors.push('message-subject');
            }

            if (attrs['message[content]'] === '') {
                errors.push('message-content');
            }

            if (this.containsFilter) {
                // ensure one of the filters has a selection
                var enabled = false;

                _.each(this.filters, function (filter) {
                    if (attrs[filter] !== '') {
                        enabled = true;
                    }
                });

                if (!enabled) {
                    errors.push('message-filters');
                }


            }


            if (errors.length > 0) {
                return errors;
            }
        }

    });
});