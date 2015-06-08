define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        context = require('context'),
        namespacer = require('shared/utils/namespacer'),
        Filter = require('thirdchannel/views/filter/main'),
        SetSchedule = require('procrastination/views/schedule/upcoming/list'),
        ListSchedule = require('procrastination/views/schedule/current/main'),
        ManageSchedule = require('procrastination/views/admin/list_scheduling_progress'),
        CostEstimateModel = require('procrastination/models/admin/cost_estimate'),
        CostEstimateView = require('procrastination/views/admin/cost_estimate'),

        AppRouter = require('shared/routers/contextAwareBaseRouter').extend({

            routes: {
                ':customer_slug/:program_slug/schedule/:person_id/create': 'createSchedule',
                ':customer_slug/:program_slug/schedule/:aggregate_id/edit': 'createSchedule',
                ':customer_slug/:program_slug/schedule/:person_id': 'showSchedule',
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
            },

            editSchedule: function(){
                new SetSchedule().fetch();
            },

            showSchedule: function() {
                var view =  new ListSchedule();
                view.fetch();
            },

            manageSchedule: function() {
                Filter.init();
                var view = new ManageSchedule();

                if(context.content) {
                    view.bootstrapCollection(context.content);
                } else {
                    view.fetch();
                }

                var costEstimate = new CostEstimateModel();
                new CostEstimateView({model: costEstimate}).render();
                costEstimate.fetch();
            }
        });

    return AppRouter;
});