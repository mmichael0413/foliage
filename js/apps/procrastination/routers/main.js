define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        context = require('context'),
        namespacer = require('shared/utils/namespacer'),
        Filter = require('thirdchannel/views/filter/main'),
        SetSchedule = require('procrastination/views/schedule/upcoming/list'),
        ListSchedule = require('procrastination/views/schedule/current/main'),
        ManageSchedule = require('procrastination/views/admin/list_scheduling_progress'),
        CostEstimate = require('procrastination/models/schedule/cost_estimate'),
        CostEstimateView = require('procrastination/views/schedule/cost_estimate'),
        AdminCostEstimate = require('procrastination/models/admin/cost_estimate'),
        AdminCostEstimateView = require('procrastination/views/admin/cost_estimate'),
        AdminSchedulingCycles = require('procrastination/collections/admin/scheduling_cycles'),
        AdminSchedulingCyclesView = require('procrastination/views/admin/scheduling_cycles'),
        buttons = require('buttons'),

        AppRouter = require('shared/routers/contextAwareBaseRouter').extend({

            routes: {
                ':customer_slug/:program_slug/schedule/:person_id/create': 'createSchedule',
                ':customer_slug/:program_slug/schedule/:aggregate_id/edit': 'createSchedule',
                ':customer_slug/:program_slug/schedule/:person_id': 'showSchedule',
                ':customer_slug/:program_slug/admin/scheduling(/)': 'listSchedulingCycles',
                ':customer_slug/:program_slug/admin/scheduling/upcoming': 'manageSchedule',
                ':customer_slug/:program_slug/admin/scheduling/current': 'manageSchedule'
            },

            before: function(parameters) {
                context.customer_slug = parameters[0];
                context.program_slug = parameters[1];
                context.base_url = '/' + context.customer_slug + '/' + context.program_slug;

                // stuff the bootstrap into the context
                _.extend(context, window.bootstrap);
            },

            createSchedule: function() {
                new SetSchedule().fetch();
                var model = new CostEstimate({id: context.aggregateId});
                new CostEstimateView({model: model}).fetch();
            },

            editSchedule: function() {
                new SetSchedule().fetch();
            },

            showSchedule: function() {
                new ListSchedule({showCompleted: true}).fetch();
                var model = new CostEstimate({id: context.aggregateId});
                new CostEstimateView({model: model}).fetch();
            },

            listSchedulingCycles: function() {
                var collection = new AdminSchedulingCycles();
                var view = new AdminSchedulingCyclesView({collection: collection});

                if(context.content !== undefined) {
                    collection.add(context, {parse: true});
                    view.render();
                } else {
                    collection.fetch().done(function() {
                        view.render();
                    });
                }
            },

            manageSchedule: function() {
                Filter.init();
                var view = new ManageSchedule();

                if(context.content) {
                    view.bootstrapCollection(context.content);
                } else {
                    view.fetch();
                }

                var costEstimate = new AdminCostEstimate({id: context.cycleId});
                new AdminCostEstimateView({model: costEstimate}).fetch();
            }
        });

    return AppRouter;
});