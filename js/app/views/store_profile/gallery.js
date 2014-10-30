define(function(require) {
	var Backbone = require('backbone'),
		_ = require('underscore'),
		context = require('context'),
		HoverableImageView = require('app/views/store_profile/hoverable_image'),

		GalleryView = Backbone.View.extend({
			el: "#gallery",
			render: function () {
				var self = this,
					shadowGallery = document.createElement('div');
				// I should probably be converting the images into proper models and collections,  but it just doesn't feel right
				// when we're just going to be converting them straight back to json in the HoverableImageView
				_.each(context.images, function (image){
					var view = new HoverableImageView({model: image}).render();
					shadowGallery.appendChild(view.el);
				});
				this.$el.find('.body').html(shadowGallery.childNodes);
				return self;
			}
		});

	return GalleryView;

});