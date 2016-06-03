define(function (require) {
    
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Filter = require('thirdchannel/views/filter/main'),
        MessagesView = require('oddjob/views/misc/messages'),
        JobCreateView = require('oddjob/views/jobs/create'),
        JobEditView = require('oddjob/views/jobs/edit'),
        TrainingCreateView = require('oddjob/views/trainings/create'),
        TrainingEditView = require('oddjob/views/trainings/edit'),
        ScheduleEditView = require('oddjob/views/schedules/schedule'),
        StoreListView = require('oddjob/views/stores/list'),
        StoreUploadView = require('oddjob/views/stores/upload'),
        ScheduledStoresView = require('oddjob/views/stores/scheduled'),
        StoreControlsView = require('oddjob/views/stores/controls'),
        AddStoresView = require('oddjob/views/schedules/addStores'),
        TasksListView = require('oddjob/views/tasks/list'),
        EditBlackoutSchemeView = require('oddjob/views/blackout_schemes/blackout_scheme');

    var Router = require('shared/routers/contextAwareBaseRouter').extend({
        routes: {
            ':customer/:programSlug/jobs(/)': 'jobsList',
            ':customer/:programSlug/jobs/create(/)': 'jobsCreate',
            ':customer/:programSlug/jobs/:jobId(/)': 'jobsEdit',
            ':customer/:programSlug/jobs/:jobId/schedule(/)': 'scheduleCreate',
            ':customer/:programSlug/jobs/:jobId/schedule/:frequencyIndex': 'scheduleEdit',
            ':customer/:programSlug/jobs/:jobId/schedule/:frequencyIndex/add': 'scheduleAddStores',
            ':customer/:programSlug/blackoutschemes/:id(/)': 'editBlackoutScheme',
            ':customer/:programSlug/trainings(/)': 'jobsList',
            ':customer/:programSlug/trainings/create(/)': 'trainingsCreate',
            ':customer/:programSlug/trainings/:jobId(/)': 'trainingsEdit',
           // ':customer/:programSlug/trainings/:jobId/schedule(/)': 'scheduleCreate',
           // ':customer/:programSlug/trainings/:jobId/schedule/:frequencyIndex': 'scheduleEdit',
           // ':customer/:programSlug/trainings/:jobId/schedule/:frequencyIndex/add': 'scheduleAddStores',
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
            new MessagesView();
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
            //new FrequencyCreateView({el: $("#frequencyForm")}).render();
            new ScheduleEditView().render();
            new StoreControlsView();
            new StoreUploadView();
            new StoreListView();
        },

        scheduleEdit: function (customer, programSlug, jobId, frequencyIndex) {
            Filter.init();
            //new FrequencyCreateView({el: $("#frequencyForm")}).render();
            new ScheduleEditView().render();
            new StoreControlsView();
            new ScheduledStoresView();
        },
        scheduleAddStores: function (customer, programSlug, jobId, frequencyIndex) {
            Filter.init();
            new AddStoresView();
            new StoreControlsView();
            new StoreUploadView();
            new StoreListView();
        },
        editBlackoutScheme: function(customer, programSlug, id) {
            new EditBlackoutSchemeView();
        },
        trainingsCreate: function (customer, programSlug) {
            new TrainingCreateView({model: new Backbone.Model()}).render();
        },

        trainingsEdit: function (customer, programSlug, jobId) {
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
                    new TrainingEditView({model: job}).render();
                });
        }

    });

    return Router;
});
