define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Upload = require('stores/models/upload');

    return Backbone.Collection.extend({
        model: Upload,
        initialize: function(models, options) {
            this.program = options.program;
        },
        url: function() {
            return '/api/programs/' + this.program.get('id') + '/uploads';
        }
    });
});