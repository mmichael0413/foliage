define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context');

    return Backbone.Model.extend({
        containsFilter: false,
        filters: [],

        url: function () {
            return '/programs/' + context.programId + '/fixture_tracking/';
        },


    });
});