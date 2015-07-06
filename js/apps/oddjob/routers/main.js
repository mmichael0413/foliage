define(function (require) {
    
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Filter = require('thirdchannel/views/filter/main');

    var Router = require('shared/routers/contextAwareBaseRouter').extend({
        routes: {
            ':customer/:programSlug/jobs': 'jobsList'
        },

        before: function (parameters) {
            // stuff the bootstrap into the context
            _.extend(context, window.bootstrap);
            
        },

        jobsList: function (customer, programSlug) {
            

        }
    });

    return Router;
});