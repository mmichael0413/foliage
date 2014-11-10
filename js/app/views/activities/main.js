define(function(require) {
    var context = require('context'),
        ActivitiesView = require('app/views/activities/activities'),
        GlobalView = require('app/views/activities/global'),
        Filter = require('app/views/filter/main');

    return {
        init: function (url, incomplete_url, singleActivity) {
            // requires that a bootstrap set of json data be placed on the window
            if(!context.instances.activitiesView) {

                new GlobalView();
                Filter.init();
                context.instances.activitiesView = new ActivitiesView({
                    url: url,
                    incompleteActivityUrl: incomplete_url,
                    programId: context.programId,
                    singleActivity: singleActivity
                });
                context.instances.activitiesView.fetch();

            }

        }
    };
});