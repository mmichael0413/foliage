define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        initialize: function (options) {
            this.options = options;
        },
        url: function () {
            return '/programs/' + this.options.programId + "/reports/checkin/" + this.options.checkinId + "/question/" + this.options.questionId + "?format=json";
        }
    });
});