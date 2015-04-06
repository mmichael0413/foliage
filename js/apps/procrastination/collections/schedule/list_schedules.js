define(function(require) {
    var Backbone = require('backbone'),
        context = require('context');

    return Backbone.Collection.extend({
       initialize: function() {
           return this;
       }
    });
});