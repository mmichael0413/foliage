define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        initialize: function(options) {
            this.programId = options.programId;
            this.checkinId = options.checkinId;
            this.data = "";
        },
        isNew : function () { return false; },
        url: function() {
            return '/programs/' + this.programId + '/checkins/' + this.checkinId + '/save?' + this.data;
        }
    });
});