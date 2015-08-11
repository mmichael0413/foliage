define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Model.extend({
        url: function() {
            var base = '/api/accounts';
            if(this.get('id')) {
                base += '/' + this.get('id');
            }
            return base;
        }
    });
});