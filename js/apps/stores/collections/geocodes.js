define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Collection.extend({
        initialize: function(models, options) {
            this.store = options.store;
        },
        url: function() {
            return '/api/stores/' + this.store.get('id') + '/geocodes';
        }
    });
});