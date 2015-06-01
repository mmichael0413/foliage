define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        namespacer = require('shared/utils/namespacer'),
        MainLayout = require('shared/views/layout/main'),
        ServiceDetailsView = require('bigTastysBackDoor/views/serviceDetails'),
        HandlebarsHelpers = require('handlebarsHelpers');

    var AppRouter = require('shared/routers/contextAwareBaseRouter').extend({
        routes: {
            'monitor(/)': 'monitorServices',
        },

        before: function (parameters) {
            // stuff the bootstrap into the context
            
            _.extend(context, window.bootstrap);
            
            // this may need to be moved into the actual action
            context.router = context.mainRouter;
        },

        monitorServices: function () {
            var $serviceDetails = $(".service-detail");
            _.each($serviceDetails, function($el) {
                new ServiceDetailsView({el: $el});
            });
            context.trigger("monitor:update");
            setInterval(function () {
                context.trigger("monitor:update");
            }, 10000);
        }
    });


    var initialize = function(){
        namespacer('bootstrap');
        
        MainLayout.init();
        context.router = new AppRouter();
        context.instances = {};
        Backbone.history.start({pushState: true, hashChange: false});
    };
    return {
        initialize: initialize
    };
});