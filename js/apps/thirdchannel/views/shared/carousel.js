define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        context = require('context'),
        GalleryImageModal = require('thirdchannel/modals/gallery_image_modal'),
        HoverableImageView = require('thirdchannel/views/shared/hoverable_image'),

        /**
         *
         *
         * @exports thirdchannel/views/shared/carousel
         */
        Carousel = Backbone.View.extend({
            el: '#images',

            events: {
                'click .arrow-left' : 'prevSlide',
                'click .arrow-right' : 'nextSlide'
            },

            initialize: function() {
                var self = this;
                this.listenTo(context, 'gallery:image:open', function(model) {
                    self.modal = new GalleryImageModal({model: model});
                    $("body").append(self.modal.render().el);
                });
            },

            render: function () {
                var $carousel = this.$('.carousel');
                if(!this.collection.isEmpty()) {
                    this.collection.each(function(image){
                        $carousel.append(new HoverableImageView({model: image}).render().$el);
                    });
                } else {
                    $carousel.append("<p>There are no images for this store.</p>");
                }

                this.carousel = $carousel.slick({
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

    return Carousel;
});