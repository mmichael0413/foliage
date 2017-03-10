define(function(require) {
    var Backbone = require('backbone'),
        context = require('context');

    return Backbone.Collection.extend({
        url: function() {
            return '/programs/' + context.programId + '/stores.json';
        },
        parse: function(response, options) {
            return response.items;
        }
    });
});