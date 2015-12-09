define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        url: function() {
            return '/programs/' + this.get('programId') + '/exports/sales_stores' + (this.id === undefined ? '' : '/' + this.id);
        }
    });
});