define(function(require){

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Router = require('thirdchannel/routers/router'),
        ApplicationRouter = require('thirdchannel/routers/application_router');

        var initialize = function(){
            Router.initialize();
            Backbone.history.start({pushState: true, hashChange: false});
        };

    return {
        initialize: initialize
    };
});