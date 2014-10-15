define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        initialize: function (options) {
            this.alertId = options.id;
        },
        url: function () {
            return this.alertId + "/filters.json";
        }
    });
});