define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        url: function() {
            return '/programs/' + this.get('programId') + '/exports/roi' + (this.id === undefined ? '' : '/' + this.id);
        }
    });
});