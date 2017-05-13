define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        url: function() {
            return '/programs/' + this.get('programId') + '/manage/jobs/exports' + (this.id === undefined ? '' : '/' + this.id);
        }
    });
});