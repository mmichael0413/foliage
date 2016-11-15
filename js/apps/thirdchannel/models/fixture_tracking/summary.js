define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context');

    return Backbone.Model.extend({
        url: function() {
            return '/programs/' + this.get('programId') + '/fixture_tracking/summary';
        }
    });
});