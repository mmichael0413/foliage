define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        url: function() {
            var u = '/programs/' + this.get('programId') + '/checkins/' + this.get('checkinId') +"/submissions/" + this.get('submissionId') + '/images';
            if(!this.isNew()) {
                u += '/' + this.id;
            }
            return u;
        }
    });
});