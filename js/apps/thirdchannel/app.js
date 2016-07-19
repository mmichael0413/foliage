define(function(require){

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        Router = require('thirdchannel/routers/router');

        var initialize = function(){
            Router.initialize();
            Backbone.history.start({pushState: true, hashChange: false});
        };

    return {
        initialize: initialize
    };
});