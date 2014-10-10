define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Model.extend({
        initialize: function (options) {
            this.alertId = options.id;
        },
        url: function () {
            return this.alertId + "/stores.json";
        }
    });
});
