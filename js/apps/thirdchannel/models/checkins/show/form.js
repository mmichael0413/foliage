define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        initialize: function(options) {
            this.programId = options.programId;
            this.checkinId = options.checkinId;
            this.submissionId = options.submissionId;
            this.data = "";
        },
        isNew : function () { return false; },
        url: function() {
            // return '/programs/' + this.programId + '/checkins/' + this.checkinId +'/submissions/' + this.submissionId + '/auto_save?' + this.data;
            return '/programs/' + this.programId + '/checkins/' + this.checkinId +'/save?submission=' +this.submissionId +"&" + this.data;
        }
    });
});