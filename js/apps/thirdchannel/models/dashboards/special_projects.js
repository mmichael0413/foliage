define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Model.extend({
        initialize: function(options) {
            this.queryString = options.queryString;
        },
        url: function() {
            return '?' + this.queryString;
        }
    });
});