define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Collection.extend({
        initialize: function (options) {
            this.programId = options.programId;
            this.alertId = options.id;
        },
        url: function () {
            return "/programs/" + this.programId + "/dashboards/alerts/filters/" + this.alertId + ".json";
        }
    });
});