define(function (require) {
    var Backbone = require('backbone'),
        _ = require("underscore"),
        Viewer = require('viewer'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        className: 'fixture-instance-tile section',

        template: HandlebarsTemplates["thirdchannel/fixtures/fixture_detail_tile"],

        events: {
            'click .details-toggle.ic_down': "showDetails",
            'click .problems': "toggleDetails",
            'click .images': "toggleDetails",
            'click .details-toggle.ic_up': 'hideDetails',
            "click .arrow-left": "prevSlide",
            "click .arrow-right": "nextSlide",
            "click .reprocess": "reprocessImage"
        },

        showDetails: function (e) {
            this.$el.find(".details").show();
            if (!this.carousel) {
                this.initializeCarousel();
            }
            this._swapArrows(this.$el.find('.details-toggle'), "ic_down", "ic_up");
        },

        hideDetails: function (e) {
            this.$el.find(".details").hide();
            this._swapArrows(this.$el.find('.details-toggle'), "ic_up", "ic_down");
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
            if (images && images.hasOwnProperty("links")) {
                var link = _.find(images.links, function (image) { 
                    return image.rel === rel;
                });
                if (link){
                    return link.href;
                }
            }
        },

        prevSlide: function (e) {
            e.preventDefault();
            this.carousel.slickPrev();
        },

        nextSlide: function (e) {
            e.preventDefault();
            this.carousel.slickNext();
        },

        initializeCarousel: function () {
            var self = this;
            this.carousel = this.$el.find('.carousel').slick({
                draggable: true,
                arrows: false,
                onInit: function () {
                    var $carousel = self.$('.carousel');
                    var width = $carousel.width();

                    self.$('.slick-slide').height(width);
                    $carousel.find('img').css({'max-width': width, 'max-height': width});
                }
            });
        },

        _buildStoreUrl: function (data) {
            // the trick here is to tweak the url based on whether or not we're in the store_profile page vs the fixtures_page
            var storeUrl = "",
                fixturesTag = "/fixtures",
                indexOfFixtures = location.pathname.indexOf(fixturesTag),
                isStoreProfile = function () {
                    return indexOfFixtures == location.pathname.length - fixturesTag.length && data.programStoreUuid && location.pathname.indexOf(data.programStoreUuid) > 0;
                };

                
            // // if we're already at the fixture page, go to the root
            if (isStoreProfile()) {
                storeUrl = location.pathname.substr(0, indexOfFixtures);
            } else {
                storeUrl = context.links.fixture_tracking.program_store_base + "/" + data.programStoreUuid + fixturesTag;
            }

            return storeUrl;
        },

        reprocessImage: function (event) {
            event.preventDefault();
            event.stopPropagation();

            if (this.model.attributes.pictures && this.model.attributes.pictures.length > 0) {

                var programUUID = this.model.attributes.pictures[0].programUUID;
                var imageUUID = this.model.attributes.pictures[0].imageUUID;
                var url = context.links.fixture_tracking.reprocessing_base_url + '/reprocess/' + programUUID + '/' + imageUUID;

                var spinner = '<i class="fa fa-spinner fa-spin fa-fw"></i>';
                this.$('.admin-links').append(spinner);
                this.$('.reprocess').remove();
                var self = this;
                $.ajax({
                    url: url,
                    method: 'POST',
                    crossDomain: true
                }).done(function (a) {
                    // alert('Processing has completed.');
                    self.$('.fa-spinner').remove();
                    self.$('.admin-links').append('<i class="fa fa-check-square"></i> Refresh the page to see the reprocessed image');
                }).fail(function (err) {
                    console.log('error');
                    self.$('.fa-spinner').remove();
                });
            }
        },

        render: function () {
            // the following is pretty gross. todo: clean this up
            var data = this.model;
            this.carousel = undefined;
            data.containsImages = data.imagesCount > 0;
            data.alert = data.problemsCount > 0;
            data.imageErrorUrl = context.links.fixture_tracking.image_error;
            data.showReprocessingLink = false;
            if (data.attributes.pictures && data.attributes.pictures.length > 0) {
                data.previewImageUrl = this._extractImageUrl(data.attributes.pictures[0], "small");
                data.pictures = [];
                data.attributes.pictures.forEach(function (picture) {
                    if (picture && picture.links) {
                        var link = _.find(picture.links, function (image) {
                            return image.rel === "large";
                        });

                        if (link) {
                            data.pictures.push(link);
                        }
                    }
                });
                if (context.links.fixture_tracking.reprocessing_base_url !== undefined) {
                    data.showReprocessingLink = true;
                }
            } else {
                // this is being explicitly set because firefox does not trigger the onError event if the src is empty.
                data.previewImageUrl = data.imageErrorUrl;
            }
            data.storeUrl = this._buildStoreUrl(data);
            data.hasVisibility = data.visibility && data.visibility !== "";
            this.$el.html(this.template(data));

            this.viewer = this.$('.activity-photos').viewer({
                inline: false,
                rotatable: false,
                transition: false,
                scalable: false,
                title: false,
                fullscreen: true
            });

            return this;
        }
    });

});