define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Action = require('stores/models/action');

    return Backbone.Collection.extend({
        model: Action
    });
});