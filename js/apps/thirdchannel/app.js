define(function(require){

    var $ = require('jquery'),
        _ = require('underscore'),
        sb = require('slidebars'),
        Backbone = require('backbone'),
        Router = require('thirdchannel/routers/router');

        var initialize = function(){
            Router.initialize();
            Backbone.history.start({pushState: true, hashChange: false});
            $.slidebars();
        };

    return {
        initialize: initialize
    };
});