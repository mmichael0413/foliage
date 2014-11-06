define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        context = require('context'),
        GalleryImageModal = require('app/modals/store_profile/gallery_image_modal'),
        HoverableImageView = require('app/views/store_profile/hoverable_image'),
        
        /**
         *
         * 
         * @exports app/views/store_profile/profile_carousel
         */
        ProfileCarousel = Backbone.View.extend({
            el: '#images',

            events: {
                'click .arrow-left' : 'prevSlide',
                'click .arrow-right' : 'nextSlide',
            },

            initialize: function () {
                var self = this;
                this.listenTo(context, 'gallery:image:open', function(model) {
                    self.modal = new GalleryImageModal({model: model});
                    $("body").append(this.modal.render().el);
                });
            },

            render: function () {
                var galleryBody = this.$el.find(".carousel");
                if (context.images && context.images.length > 0) {
                _.each(context.images, function (image){
                    galleryBody.append(new HoverableImageView({model: new Backbone.Model(image)}).render().$el);
                });    
                } else {
                    galleryBody.append("<p>There are no images for this store.</p>");
                }
                            
                this.carousel = galleryBody.slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                    variableWidth: true,
                    infinite: false
                });
            },
            prevSlide: function(e){
                e.preventDefault();
                this.carousel.slickPrev();
            },
            nextSlide: function(e){
                e.preventDefault();
                this.carousel.slickNext();
            }
        });

    return ProfileCarousel;
});