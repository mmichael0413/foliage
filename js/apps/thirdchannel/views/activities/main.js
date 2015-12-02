define(function(require) {
    var context = require('context'),
        ActivitiesView = require('thirdchannel/views/activities/activities'),
        GlobalView = require('thirdchannel/views/activities/global'),
        StoreSalesRegistry = require('thirdchannel/registries/activities/store_sales'),
        Filter = require('thirdchannel/views/filter/main');

    return {
        init: function (url, incomplete_url, singleActivity) {
            // requires that a bootstrap set of json data be placed on the window
            if(!context.instances.activitiesView) {
                new GlobalView();
                Filter.init();
                new StoreSalesRegistry();
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