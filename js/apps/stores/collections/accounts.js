define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Collection.extend({
        comparator: 'name',
        url: '/api/accounts'
    });
});