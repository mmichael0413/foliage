define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Label = require('stores/models/label');

    return Backbone.Collection.extend({
        model: Label,
        comparator: 'name',
        initialize: function(models, options) {
            this.programStore = options.programStore;
        },
        url: function() {
            return '/api/programs/' + this.programStore.get('programUUID') + '/program_stores/' + this.programStore.get('id') + '/labels';
        }
    });
});
