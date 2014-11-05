define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Model.extend({
        initialize: function (options) {
            this.queryString = "";
            this.alertId = options.id;
        },
        url: function () {
            return "alerts/" + this.alertId + '/count?' + this.queryString;
        }
    });
});