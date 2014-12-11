define(function(require) {
	var BasePhotoModal = require('thirdchannel/modals/activities/photo-modal'),

		GalleryImageModal = BasePhotoModal.extend({
			className: 'hoverable-image-modal',
			templateName: 'thirdchannel/store_profile/photo_modal'
		});

	return GalleryImageModal;
});