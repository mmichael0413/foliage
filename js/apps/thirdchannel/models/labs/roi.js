define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        url: function() {
            return '/programs/' + this.get('programId') + '/labs/roi' + (this.id === undefined ? '' : '/' + this.id);
        }
    });
});