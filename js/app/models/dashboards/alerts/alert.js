define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Model.extend({
        url: function () {
            return "alerts/" + this.id + '/count';
        }
    });
});