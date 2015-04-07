define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        context = require('context'),
        namespacer = require('shared/utils/namespacer'),
        Filter = require('thirdchannel/views/filter/main'),
        SetSchedule = require('procrastination/views/schedule/list_to_be_scheduled'),
        ListSchedule = require('procrastination/views/schedule/list_scheduled'),
        ManageSchedule = require('procrastination/views/admin/list_scheduling_progress'),

        AppRouter = require('shared/routers/contextAwareBaseRouter').extend({

            routes: {
                ':customer_slug/:program_slug/schedule/:person_id/create': 'createSchedule',
                ':customer_slug/:program_slug/schedule/:person_id': 'showSchedule',
                ':customer_slug/:program_slug/admin/scheduling/upcoming': 'manageSchedule'
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

            showSchedule: function() {
                var view =  new ListSchedule();
                if(context.content) {
                    view.bootstrapCollection(context.content);
                } else {
                    view.render();
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

            }
        });

    return AppRouter;
});