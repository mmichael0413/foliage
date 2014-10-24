define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        PhotoModal = require('app/modals/activities/photo-modal'),
        SlickCarousel = require('slick_carousel');
//todo: Replace Carousel
    return Backbone.View.extend({
        el: '#site-wrapper',
        initialize: function (options) {
            var self = this;
            this.listenTo(context, 'activity:openModal', function (model) {
                self.openModal(model);
            });
        },
        events: {
            "click .bbm-modal .arrow-left" : "prevSlide",
            "click .bbm-modal .arrow-right" : "nextSlide"
        },
        openModal: function (model) {
            var self = this;
            this.modal = new PhotoModal({model: model});
            this.$el.append(this.modal.render().el);
            this.$('.bbm-modal img').css('max-height',$( window ).height()*0.8);
            this.carousel = this.$('.bbm-modal .swiper-wrapper').slick({
                draggable: false,
                arrows: false,

                onInit: function(){     
                    var height = self.$('.bbm-modal').height();
                    self.$('.bbm-modal .swiper-slide').css('line-height', height + 'px');
                }
             });   

            return this;
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

});