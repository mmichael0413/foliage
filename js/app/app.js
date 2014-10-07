define([
    'jquery',
    'underscore',
    'backbone',
    'app/routers/router'
], function($, _, Backbone, Router){

        var initialize = function(){
            Router.initialize();
        };

    return {
        initialize: initialize
    };
});