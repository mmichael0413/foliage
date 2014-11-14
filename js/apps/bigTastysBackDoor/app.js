define(function(require){

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Router = require('bigTastysBackDoor/routers/router');

    var initialize = function(){
        Router.initialize();
    };

    return {
        initialize: initialize
    };
});