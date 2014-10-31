define(function(require) {
	var Backbone = require('backbone'),
		template = require('handlebarsTemplates')['store_profile/hoverable_image'],

		/**
		 * Provides 
		 * 
		 * @type {[type]}
		 */
		HoverableImageView = Backbone.View.extend({
			className: 'hoverable-image',
			events: {
				'mouseover': 'mouseOver',
				'mouseout': 'mouseOut'
				
			},

			render: function () {
				this.$el.addClass(this.model.image_type);
				this.$el.html(template(this.convertModel(this.model)));
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
			}


		});

	return HoverableImageView;

});