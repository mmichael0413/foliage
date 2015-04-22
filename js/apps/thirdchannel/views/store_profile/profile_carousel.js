define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        context = require('context'),
        GalleryImageModal = require('thirdchannel/modals/store_profile/gallery_image_modal'),
        HoverableImageView = require('thirdchannel/views/store_profile/hoverable_image'),
        
        /**
         *
         * 
         * @exports thirdchannel/views/store_profile/profile_carousel
         */
        ProfileCarousel = Backbone.View.extend({
            el: '#images',
            
            events: {
                'click .arrow-left' : 'prevSlide',
                'click .arrow-right' : 'nextSlide'
            },

            initialize: function() {
                var self = this;
                console.log(this);
                this.listenTo(context, 'gallery:image:open', function(model) {
                    self.modal = new GalleryImageModal({model: model});
                    $("body").append(self.modal.render().el);
                });
            },

            render: function () {
                var self = this;
                if (context.images && context.images.length > 0) {
                    _.each(context.images, function (image){
                        self.$el.append(new HoverableImageView({model: new Backbone.Model(image)}).render().$el);
                    });
                } else {
                    this.$el.append("<p>There are no images for this store.</p>");
                }
                            
                this.carousel = this.$el.slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                    variableWidth: true,
                    infinite: false,
                    arrows: false,
                    responsive: [
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
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