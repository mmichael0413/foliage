define(function (require) {
    require('slick_carousel');
    var context = require('context'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Filter = require('thirdchannel/views/filter/main'),

        ActivitiesMain = require('thirdchannel/views/activities/main'),

        PersonnelSectionView = require('thirdchannel/views/store_profile/personnel'),
        ProfileCarouselView = require('thirdchannel/views/store_profile/profile_carousel'),
        ExpandWrapperView = require('thirdchannel/views/utils/expand_wrapper_view'),
        OpenAlertsView = require('thirdchannel/views/store_profile/open_alerts'),
        GalleryView = require('thirdchannel/views/store_profile/gallery'),
        ResolvedAlertsView = require('thirdchannel/views/store_profile/resolved_alerts');

    /**
     * The main entry point for loading the JS needed for the store profile page
     *
     * 
     * @exports thirdchannel/views/store_profile/main
     */
    var main = {
        init: function () {
            _.extend(context, window.bootstrap);
            new PersonnelSectionView().fetch();
            new OpenAlertsView().fetch();
            new ProfileCarouselView().render();
            var wrapper = new ExpandWrapperView();
            
            wrapper.setElement('#site-canvas').render();
        },
        activity: function () {
            var url = '/programs/' + context.programId + '/activities/posts?customer_store=' +context.requestParameters[1];
            ActivitiesMain.init(url, null, false);
        },
        history: function () {
            new OpenAlertsView().renderCollection(context.alerts.open);
            new ResolvedAlertsView().renderCollection(context.alerts.resolved);
        },
        gallery: function () {
            if(!context.instances.galleryView) {
                Filter.init(new Backbone.Collection());
                context.instances.galleryView = new GalleryView();
            }
        }
    };
    return main;
});