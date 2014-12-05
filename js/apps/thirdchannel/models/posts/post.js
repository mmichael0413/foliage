define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context');

    return Backbone.Model.extend({
        containsFilter: false,
        filters: [],

        url: function () {
            return '/programs/' + context.programId + '/posts';
        },
        validate: function (attrs, options) {
            var errors = [];


            if (attrs.message.subject === '') {
                errors.push('message-subject');
            }

            if (attrs['message-content'] === '') {
                errors.push('message-content');
            }

            if (attrs.message.toable_filter) {
                // ensure one of the filters has a selection
                var enabled = false;

                _.each(attrs.message.toable_filter, function (filter) {
                    _.each(filter, function(subfilter){
                        if (subfilter.length > 1){
                            enabled = true;
                        }
                    });
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