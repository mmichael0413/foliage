define(function(require) {
    var BasePhotoModal = require('thirdchannel/modals/photo_modal'),

        GalleryImageModal = BasePhotoModal.extend({
            className: 'hoverable-image-modal',
            templateName: 'thirdchannel/gallery_image_modal'
        });

    return GalleryImageModal;
});