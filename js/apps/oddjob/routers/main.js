define(function (require) {
    
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Filter = require('thirdchannel/views/filter/main'),
        JobsListView = require('oddjob/views/jobs/list');

    var Router = require('shared/routers/contextAwareBaseRouter').extend({
        routes: {
            ':customer/:programSlug/jobs': 'jobsList'
        },

        before: function (parameters) {
            // stuff the bootstrap into the context
            _.extend(context, window.bootstrap);
            window.context = context;
            context.stores = {
                groups: require('oddjob/stores/groups')
            };
        },

        jobsList: function (customer, programSlug) {
            new JobsListView().render();

        }
    });

    return Router;
});