define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        initialize: function (options) {
            this.queryString = options.queryString;
            this.programId = options.programId;
            this.reportId = options.reportId;
            this.infoId = options.infoId;
        },
        url: function () {
            return '/programs/' + this.programId + "/reports/" + this.reportId + "/info/" + this.infoId + ".json?" + this.queryString;
        }
    });
});