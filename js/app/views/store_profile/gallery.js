define(function(require) {
    var Backbone = require('backbone'),
        $ = require('jquery'),
        context = require('context'),
        HoverableImageView = require('app/views/store_profile/hoverable_image'),
        InfiniteScrollView = require('app/views/shared/infinite_scroll'),
        InfiniteCollection = require('app/collections/shared/infinite'),
        GalleryImageModal = require('app/modals/store_profile/gallery_image_modal'),

        /**
         *
         * @exports app/views/store_profile/gallery
         */
        GalleryView = InfiniteScrollView.extend({
            el: "#gallery",
            infiniteCollectionClass: InfiniteCollection,
            per: 10,

            initialize: function () {
                this.infiniteURL = context.links.feed;
                GalleryView.__super__.initialize.apply(this, {url: context.links.feed});
                var self = this;
                this.listenTo(context, 'gallery:image:open', function(data) {
                    self.modal = new GalleryImageModal({model: new Backbone.Model(data)});
                    $("body").append(this.modal.render().el);
                });
            },


            renderModel: function (model) {
                var view = new HoverableImageView({model: model}).render();
                this.getContentElement().append(view.$el);
            },

            getContentElement: function () {
                return this.$el.find('.body');
            }

        });

    return GalleryView;

});