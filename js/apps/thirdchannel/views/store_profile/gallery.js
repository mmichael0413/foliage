define(function(require) {
    var $ = require('jquery'),
        context = require('context'),
        HoverableImageView = require('thirdchannel/views/shared/hoverable_image'),
        InfiniteScrollView = require('thirdchannel/views/shared/infinite_scroll'),
        InfiniteCollection = require('thirdchannel/collections/shared/infinite'),
        GalleryImageModal = require('thirdchannel/modals/gallery_image_modal'),

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
                    $("body").append(self.modal.render().el);
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