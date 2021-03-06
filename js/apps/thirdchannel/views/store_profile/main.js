define(function (require) {
    require('slick_carousel');
    var context = require('context'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Filter = require('thirdchannel/views/filter/main'),

        ActivitiesMain = require('thirdchannel/views/activities/main'),

        PersonnelSectionView = require('thirdchannel/views/store_profile/personnel'),
        CarouselView = require('thirdchannel/views/shared/carousel'),
        ExpandWrapperView = require('thirdchannel/views/utils/expand_wrapper_view'),
        OpenAlertsView = require('thirdchannel/views/store_profile/open_alerts'),
        GalleryView = require('thirdchannel/views/store_profile/gallery'),
        ProductView = require('thirdchannel/views/store_profile/products/show'),
        ResolvedAlertsView = require('thirdchannel/views/store_profile/resolved_alerts'),
        FixturesListView = require('thirdchannel/views/store_profile/fixtures');
        ChoicesView = require('thirdchannel/views/reports/checkins/show/choices');

    /**
     * The main entry point for loading the JS needed for the store profile page
     *
     *
     * @exports thirdchannel/views/store_profile/main
     */
    var main = {
        init: function () {
            _.extend(context, window.bootstrap);
            $(".google-open-close-time").each(function() {
                // Localize format of open and close times
                this.textContent = moment(this.textContent,'HH:mm').format('LT');
            });
        },
        activity: function () {
            var url = '/programs/' + context.programId + '/activities/posts?customer_store_uuid=' + context.requestParameters[1];
            ActivitiesMain.init(url, null, false);
        },
        intel: function () {
            new ChoicesView({surveyType: 'stores', typeId: context.requestParameters[1]});
        },
        history: function () {
            new OpenAlertsView().bootstrapCollection(context.alerts.open);
            new ResolvedAlertsView().bootstrapCollection(context.alerts.resolved);
        },
        gallery: function () {
            if(!context.instances.galleryView) {
                Filter.init(new Backbone.Collection());
                context.instances.galleryView = new GalleryView();
            }
        },
        product: function () {
            new ProductView().bootstrapCollection(window.bootstrap);
        },
        fixtures: function () {
            new FixturesListView().render();
        }
    };
    return main;
});
