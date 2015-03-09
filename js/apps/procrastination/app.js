define(function(require){

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        namespacer = require('shared/utils/namespacer'),
        MainLayout = require('shared/views/layout/main');
        MainRouter = require('procrastination/routers/main');

    var initialize = function(){
        MainLayout.init();
        context.mainRouter = new MainRouter();
        context.instances = {};
        Backbone.history.start({pushState: true, hashChange: false});
    };

    return {
        initialize: initialize
    };
});