define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Collection.extend({
        initialize: function (options) {
            this.programId = options.programId;
        },
        url: function () {
            return '/programs/' + this.programId + "/reports/filters.json";
        }
    });
});