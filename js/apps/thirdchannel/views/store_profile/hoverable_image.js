define(function(require) {
	var Backbone = require('backbone'),
		context = require('context'),
		template = require('handlebarsTemplates')['thirdchannel/store_profile/hoverable_image'],

		//GalleryImageModal = require('thirdchannel/modals/store_profile/gallery_image_modal'),

		/**
		 * Provides an image view that has a hover overlay effect
		 * 
		 * @exports thirdchannel/views/store_profile/hoverable_image
		 */
		HoverableImageView = Backbone.View.extend({
			className: 'hoverable-image',
			events: {
				'mouseover': 'mouseOver',
				'mouseout': 'mouseOut',
				'click': 'openModal'
				
			},

			render: function () {
				this.$el.addClass(this.model.get('image_type'));
				// tweak the label, show the image type of label is null
				if (!this.model.get('label')) {
					this.model.set('label', this.model.get('image_type').toUpperCase());
				}
				this.$el.html(template(this.model.toJSON()));
				return this;
			},

			mouseOver: function (e) {
				e.stopPropagation();
				this.$el.addClass('active');
			},

			mouseOut: function (e) {
				e.stopPropagation();
				this.$el.removeClass('active');
			},

			openModal: function (e) {
				e.stopPropagation();
				context.trigger('gallery:image:open', this.model);
			}


		});

	return HoverableImageView;

});