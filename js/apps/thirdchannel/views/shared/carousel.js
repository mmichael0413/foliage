define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        context = require('context'),
        Viewer = require('viewer'),
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

            render: function () {
                var $carousel = this.$('.carousel');
                if(!this.collection.isEmpty()) {
                    this.collection.each(function(image){
                        $carousel.append(new HoverableImageView({model: image}).render().$el);
                    });
                } else {
                    $carousel.append("<p>There are no images for this task.</p>");
                }

                this.carousel = $carousel.slick({
                    slidesToShow: 1,
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

                this.viewer = this.$('.image-container').viewer({
                    inline: false,
                    rotatable: false,
                    transition: false,
                    scalable: false,
                    fullscreen: false
                });

                //this.$('img').on('click', fun)
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