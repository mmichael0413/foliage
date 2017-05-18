define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        initialize: function (options) {
            this.options = options;
        },
        url: function() {
            return '/programs/' + this.options.programId + '/profiles/stores_export?profile_id=' + this.options.userId;
        }
    });
});