define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone'),
        ProgramStore = require('stores/models/program_store');

    return Backbone.Collection.extend({
        model: ProgramStore,
        initialize: function(models, options) {
            this.program = options.program;
        },
        url: function() {
            return '/api/programs/' + this.program.get('id') + '/program_stores';
        }
    });
});