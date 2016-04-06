define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Tag = require('stores/models/tag');

    return Backbone.Collection.extend({
        model: Tag,
        comparator: 'name',
        initialize: function(models, options) {
            this.programStore = options.programStore;
        },
        url: function() {
            return '/api/programs/' + this.programStore.get('programUUID') + '/program_stores/' + this.programStore.get('id') + '/tags';
        }
    });
});