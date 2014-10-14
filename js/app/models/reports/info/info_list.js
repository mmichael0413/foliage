define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Model.extend({
        initialize: function (options) {
            this.programId = options.programId;
            this.reportId = options.reportId;
            this.infoId = options.infoId;
        },
        url: function () {
            return '/programs/' + this.programId + "/reports/" + this.reportId + "/info/" + this.infoId + ".json";
        }
    });
});