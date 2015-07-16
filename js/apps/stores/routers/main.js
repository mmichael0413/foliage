define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        namespacer = require('shared/utils/namespacer');

    var AppRouter = require('shared/routers/contextAwareBaseRouter').extend({
        routes: {
            '(/)': 'root'
        },

        root: function() {
            alert('here');
        }
    });

    var initialize = function() {
        alert('here1');
        namespacer('stores');

        context.router = new AppRouter();

        Backbone.history.start({pushState: true, hashChange: false});
    };

    return {
        initialize: initialize
    };
});