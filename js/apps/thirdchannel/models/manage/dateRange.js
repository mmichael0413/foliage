define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context');

    return Backbone.Model.extend({
        defaults: {
            start: '',
            end: ''
        }
    });
});