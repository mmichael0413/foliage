define(function(require) {
    var $ = require('jquery'),
        context = require('context'),
        HoverableImageView = require('thirdchannel/views/store_profile/hoverable_image'),
        InfiniteScrollView = require('thirdchannel/views/shared/infinite_scroll'),
        InfiniteCollection = require('thirdchannel/collections/shared/infinite'),
        GalleryImageModal = require('thirdchannel/modals/store_profile/gallery_image_modal'),

        /**
         *
         * @exports thirdchannel/views/store_profile/gallery
         */
        GalleryView = InfiniteScrollView.extend({
            el: "#gallery",
            infiniteCollectionClass: InfiniteCollection,
            per: 10,

            initialize: function () {
                this.infiniteURL = context.links.feed;
                GalleryView.__super__.initialize.apply(this, {url: context.links.feed});
                var self = this;
                this.listenTo(context, 'gallery:image:open', function(model) {
                    self.modal = new GalleryImageModal({model: model});
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