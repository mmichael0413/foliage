define(function(require){

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Router = require('singleNickel/routers/main');

    var initialize = function(){
        Router.initialize();
    };

    return {
        initialize: initialize
    };
});