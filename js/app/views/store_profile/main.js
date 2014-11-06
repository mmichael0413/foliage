define(function (require) {
    require('slick_carousel');
    var context = require('context'),
        _ = require('underscore'),
        $ = require('jquery'),
        Backbone = require('backbone'),
        Filter = require('app/views/filter/main'),

        ActivitiesMain = require('app/views/activities/main'),

        PersonnelSectionView = require('app/views/store_profile/personnel'),
        ExpandWrapperView = require('app/views/utils/expand_wrapper_view'),
        OpenAlertsView = require('app/views/store_profile/open_alerts'),
        GalleryView = require('app/views/store_profile/gallery'),
        HoverableImageView = require('app/views/store_profile/hoverable_image'),
        ResolvedAlertsView = require('app/views/store_profile/resolved_alerts');

    /**
     * The main entry point for loading the JS needed for the store profile page
     *
     * 
     * @exports app/views/store_profile/main
     */
    var main = {
        init: function () {
            _.extend(context, window.bootstrap);
            new PersonnelSectionView().fetch();
            new OpenAlertsView().fetch();
            var wrapper = new ExpandWrapperView();
            var galleryBody = $("#images .image-container");
            wrapper.setElement('#site-canvas').render();

            if (context.images && context.images.length > 0) {
                _.each(context.images, function (image){
                    galleryBody.append(new HoverableImageView({model: new Backbone.Model(image)}).render().$el);
                });    
            } else {
                galleryBody.append("<p>There are no images for this store.</p>");
            }
            
            
            $('#images .image-container').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                focusOnSelect: true,
                variableWidth: true,
                infinite: false
            });



        },
        activity: function () {
            var url = '/programs/' + context.programId + '/activities/posts?customer_store=' +context.requestParameters[1];
            ActivitiesMain.init(url, null, true);
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