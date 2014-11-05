define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        context = require('context'),
        HoverableImageView = require('app/views/store_profile/hoverable_image'),
        InfiniteScrollView = require('app/views/shared/infinite_scroll'),
        InfiniteCollection = require('app/collections/shared/infinite'),

        GalleryView = InfiniteScrollView.extend({
            el: "#gallery",
            infiniteCollectionClass: InfiniteCollection,
            per: 10,

            initialize: function () {
                this.infiniteURL = context.links.feed;
                GalleryView.__super__.initialize.apply(this, {url: context.links.feed});
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