define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Collection.extend({
        url: '/recruiting/users/all'
    });
});