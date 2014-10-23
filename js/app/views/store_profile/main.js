define(function (require) {
    var context = require('context'),
        _ = require('underscore'),
        ActivitiesView = require('app/views/activities/activities'),
        PersonnelSectionView = require('app/views/store_profile/personnel'),
        ExpandWrapperView = require('app/views/utils/expandWrapperView');

    /**
     * The main entry point for loading the JS needed for the store profile page
     *
     * 
     * @exports app/views/store_profile/main
     */
    var main = {
        init: function () {
            _.extend(context, window.bootstrap);
            new PersonnelSectionView().render();
            var wrapper = new ExpandWrapperView();
            wrapper.setElement('#site-canvas').render();
        },
        activity: function () {
            var url = '/programs/' + context.programId + '/activities/posts?customer_store=' +context.requestParameters[1] ,
                activitiesView = new ActivitiesView({
                    url: url,
                    programId: context.programId                        
                });
            activitiesView.fetch();
        }
    };
    return main;
});