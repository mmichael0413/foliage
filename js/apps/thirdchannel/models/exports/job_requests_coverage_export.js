define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        url: function() {
            return '/programs/' + this.get('programId') + '/manage/jobs/coverage_exports' + (this.id === undefined ? '' : '/' + this.id);
        }
    });
});