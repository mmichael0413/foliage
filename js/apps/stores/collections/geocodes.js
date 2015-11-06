define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Collection.extend({
        initialize: function(models, options) {
            this.model = options.model;
        },
        url: function() {
            return '/api/stores/' + this.model.get('id') + '/geocodes';
        }
    });
});