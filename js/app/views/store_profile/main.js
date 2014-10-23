define(function (require) {
    require('slick_carousel');
    var context = require('context'),
        _ = require('underscore'),
        $ = require('jquery'),
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
            console.log("Hi!");
            _.extend(context, window.bootstrap);
            new PersonnelSectionView().render();
            var wrapper = new ExpandWrapperView();
            wrapper.setElement('#site-canvas').render();
            
            $('#images .body').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                focusOnSelect: true,
                variableWidth: true
            });
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