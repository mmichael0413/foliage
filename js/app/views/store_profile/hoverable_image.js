define(function(require) {
	var Backbone = require('backbone'),
		context = require('context'),
		template = require('handlebarsTemplates')['store_profile/hoverable_image'],

		//GalleryImageModal = require('app/modals/store_profile/gallery_image_modal'),

		/**
		 * Provides an image view that has a hover overlay effect
		 * 
		 * @exports app/views/store_profile/hoverable_image
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
				this.$el.html(template(this.convertModel(this.model.toJSON())));
				return this;
			},
			convertModel: function(raw) {
				raw.caption = raw.image_type.toUpperCase() + "<br/>" + raw.photo_updated_at;
				if (raw.label) {
					raw.caption = raw.label + "<br/>" + raw.caption;
				}
				return raw;
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
				context.trigger('gallery:image:open', this.convertModel(this.model.toJSON()));
			}


		});

	return HoverableImageView;

});