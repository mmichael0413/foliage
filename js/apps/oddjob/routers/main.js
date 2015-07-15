define(function (require) {
    
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Filter = require('thirdchannel/views/filter/main'),
        JobCreateView = require('oddjob/views/jobs/create'),
        TasksEditView = require('oddjob/views/tasks/edit'),
        TasksListView = require('oddjob/views/tasks/list');

    var Router = require('shared/routers/contextAwareBaseRouter').extend({
        routes: {
            ':customer/:programSlug/jobs(/)': 'jobsList',
            ':customer/:programSlug/jobs/create(/)': 'jobsCreate',
            ':customer/:programSlug/tasks/:taskId': 'tasksEdit'
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
            new TasksListView().render();
        },

        jobsCreate: function (customer, programSlug) {
            new JobCreateView({model: new Backbone.Model()}).render();
        },

        tasksEdit: function (customer, programSlug, taskId) {
            console.log(arguments);
            new TasksEditView();
        }

    });

    return Router;
});