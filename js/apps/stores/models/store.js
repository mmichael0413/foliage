define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Model.extend({
        url: function() {
            return '/api/stores/' + this.get('id');
        }
    });
});