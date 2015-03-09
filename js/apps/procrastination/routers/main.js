define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        namespacer = require('shared/utils/namespacer'),
        MainLayout = require('shared/views/layout/main'),
        HandlebarsHelpers = require('handlebarsHelpers'),

        AppRouter = require('shared/routers/contextAwareBaseRouter').extend({
            routes: {
                '/schedule': 'schedule',
            },

            schedule: function() {
                console.log('here i am');
            }
        });

        return AppRouter;
});