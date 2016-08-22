define(function(require){
    var Backbone = require('backbone'),
        _ = require("underscore"),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({

        className: 'fixture-instance-tile section',

        events: {
            'click .details-toggle.ic_up': "showDetails",
            'click .problems': "toggleDetails",
            'click .images': "toggleDetails",
            'click .details-toggle.ic_down': 'hideDetails',
            "click .arrow-left" : "prevSlide",
            "click .arrow-right" : "nextSlide"
        },

        showDetails: function (e) {
            
            this.$el.find(".details").show();
            if (!this.carousel) {
                this.initializeCarousel();
            }
            this._swapArrows(this.$el.find('.details-toggle'), "ic_up", "ic_down");
        },

        hideDetails: function (e) {
            this.$el.find(".details").hide();
            this._swapArrows(this.$el.find('.details-toggle'), "ic_down", "ic_up");
        },

        toggleDetails: function (e) {
            if (this.$el.find(".details").is(":visible")) {
                this.hideDetails(e);
            } else {
                this.showDetails(e);
            }
        },

        _swapArrows: function ($link, toRemove, toAdd) {
            $link.removeClass(toRemove);
            $link.addClass(toAdd);
        },

        _extractImageUrl: function (images, rel) {
            var link = _.find(images.links, function (image) { 
                return image.rel === rel;
            });
            if (link){
                return link.href;
            }
        },

        // the following is copied from thirdchannel/views/activities/activity
        prevSlide: function(e){
            e.preventDefault();
            this.carousel.slickPrev();
        },
        nextSlide: function(e){
            e.preventDefault();
            this.carousel.slickNext();
        },
        initializeCarousel: function(){
            var self = this;
            this.carousel = this.$el.find('.carousel').slick({
                draggable: true,
                arrows: false,
                onInit: function() {
                    var $carousel = self.$('.carousel');
                    var width = $carousel.width();

                    self.$('.slick-slide').height(width);
                    $carousel.find('img').css({'max-width': width, 'max-height': width});
                }
            });
        },

        render: function () {
            // the following is pretty gross. todo: clean this up
            var data = this.model;
            this.carousel = undefined;
            data.containsImages = data.imagesCount > 0;
            data.alert = data.problemsCount > 0;
            if (data.attributes.pictures && data.attributes.pictures.length > 0) {
                data.previewImageUrl = this._extractImageUrl(data.attributes.pictures[0], "small");   
                data.pictures = [];
                data.attributes.pictures.forEach(function (picture) {
                    var link = _.find(picture.links, function (image) { 
                        return image.rel === "medium";
                    });
                    if (link) {
                        data.pictures.push(link);
                    }
                });
            }
            data.imageErrorUrl = context.links.fixtures.image_error;
            data.storeUrl = context.links.fixtures.program_store_base +"/" + this.model.programStoreUuid +"/fixtures";
            this.$el.html(HandlebarsTemplates["thirdchannel/fixtures/fixture_detail_tile"](data));
            return this;
        }
    });

});