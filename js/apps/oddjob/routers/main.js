define(function (require) {
    
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Filter = require('thirdchannel/views/filter/main'),
        JobCreateView = require('oddjob/views/jobs/create'),
        JobEditView = require('oddjob/views/jobs/edit'),
        FrequencyCreateView = require('oddjob/views/schedules/frequencyCreate'),
        StoreListView = require('oddjob/views/stores/list'),
        ScheduledStoresView = require('oddjob/views/stores/scheduled'),
        StoreControlsView = require('oddjob/views/stores/controls'),
        TasksListView = require('oddjob/views/tasks/list');

    var Router = require('shared/routers/contextAwareBaseRouter').extend({
        routes: {
            ':customer/:programSlug/jobs(/)': 'jobsList',
            ':customer/:programSlug/jobs/create(/)': 'jobsCreate',
            ':customer/:programSlug/jobs/:jobId(/)': 'jobsEdit',
            ':customer/:programSlug/jobs/:jobId/schedule(/)': 'scheduleCreate',
            ':customer/:programSlug/jobs/:jobId/schedule/:frequencyIndex': 'scheduleEdit'
            
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

        scheduleCreate: function (customer, programSlug, jobId) {
            Filter.init();
            new FrequencyCreateView({el: $("#frequencyForm")}).render();
            new StoreControlsView();
            new StoreListView();
        },

        scheduleEdit: function (customer, programSlug, jobId, frequencyIndex) {
            Filter.init();
            new FrequencyCreateView({el: $("#frequencyForm")}).render();
            new StoreControlsView();
            //new StoreListView();
            new ScheduledStoresView();
        }

    });

    return Router;
});