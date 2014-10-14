define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Model.extend({
        initialize: function (options) {
            this.programId = options.programId;
        },
        url: function () {
            return '/programs/' + this.programId + "/reports.json";
        }
    });
});