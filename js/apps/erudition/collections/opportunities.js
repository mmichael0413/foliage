define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Collection.extend({
        url: '/recruiting/opportunities/all'
    });
});