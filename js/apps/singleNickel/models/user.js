define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Model.extend({
        isSuperAdmin: function() {
            return _.contains(this.get('roles'), 'super_administrator');
        },
        isAdmin: function() {
            return _.contains(this.get('roles'), 'administrator');
        }
    });
});