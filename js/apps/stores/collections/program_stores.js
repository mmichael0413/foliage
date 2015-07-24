define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Collection.extend({
        initialize: function(models, options) {
            this.program = options.program;
        },
        url: function() {
            return '/programs/' + this.program.get('id') + '/program_stores';
        }
    });
});