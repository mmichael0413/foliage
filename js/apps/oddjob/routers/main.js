define(function (require) {
    
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Filter = require('thirdchannel/views/filter/main'),
        JobCreateView = require('oddjob/views/jobs/create'),
        JobEditView = require('oddjob/views/jobs/edit'),
        TasksListView = require('oddjob/views/tasks/list');

    var Router = require('shared/routers/contextAwareBaseRouter').extend({
        routes: {
            ':customer/:programSlug/jobs(/)': 'jobsList',
            ':customer/:programSlug/jobs/create(/)': 'jobsCreate',
            ':customer/:programSlug/jobs/:jobId(/)': 'jobsEdit',
            
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

        jobsEdit: function (customer, programSlug, jobId) {
            var job = new (Backbone.Model.extend({
                url: function () {
                    return context.links.self;
                }
            }))();
            
            job.fetch()
                .fail(function () {
                    console.log("something went wrong");
                })
                .done(function () {
                    new JobEditView({model: job}).render();
                });
        },

        tasksEdit: function (customer, programSlug, taskId) {
            console.log(arguments);
            new TasksEditView();
        }

    });

    return Router;
});