define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        namespacer = require('shared/utils/namespacer'),
        MainLayout = require('shared/views/layout/main'),
        HandlebarsHelpers = require('handlebarsHelpers'),

        SetSchedule = require('procrastination/views/schedule/list'),

        AppRouter = require('shared/routers/contextAwareBaseRouter').extend({

            routes: {
                ':customer_slug/:program_slug/schedule/:person_id': 'schedule',
            },

            before: function(parameters) {
                context.customer_slug = parameters[0];
                context.program_slug = parameters[1];
                context.base_url = '/' + context.customer_slug + '/' + context.program_slug;

                // stuff the bootstrap into the context
                _.extend(context, window.bootstrap);
            },

            schedule: function() {
                new SetSchedule().fetch();
            }
        });

    return AppRouter;
});