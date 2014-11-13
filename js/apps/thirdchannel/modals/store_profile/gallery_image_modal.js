define(function(require) {
	var BasePhotoModal = require('app/modals/activities/photo-modal'),

		GalleryImageModal = BasePhotoModal.extend({
			className: 'hoverable-image-modal',
			templateName: 'store_profile/photo_modal'
		});

	return GalleryImageModal;
});