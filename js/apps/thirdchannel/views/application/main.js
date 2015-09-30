define(function (require) {
    require('expanding');


    var Backbone = require('backbone'),
        context = require('context'),
        template = require('handlebarsTemplates'),
        FileView = require('thirdchannel/views/s3uploader/file');

    return Backbone.View.extend({
        el: '.content',
        template: template['thirdchannel/applications/thumbnail'],
        initialize: function () {
            this.$('textarea').expanding();
            this.maxImages = 5;
            this.images = {};
            this.imagesUploading = 0;

            new FileView().render(this.$('.images.application'));

            this.listenTo(context, 'image:added', this.imageAdded);
            this.listenTo(context, 'image:updated', this.imageUpdated);
            this.listenTo(context, 'image:deleted', this.imageDeleted);
            this.listenTo(context, 'upload:start', this.preventSubmit);
            this.listenTo(context, 'upload:complete', this.allowSubmit);
        },

        events: {
            'click .error-close': 'closeError'
        },

        closeError: function (e) {
            $(e.currentTarget).parent().remove();
        },

        addImage: function (model) {
            var inputSel = model.get('input');
            this.images[inputSel] = this.images[inputSel] || {};
            this.images[inputSel][model.get('uuid')] = this.getImageParams(model);
            return this;
        },

        removeImage: function (model) {
            var inputSel = model.get('input');
            var uuid = model.get('uuid');
            this.images.removed = this.images.removed || {};
            this.images.removed[uuid] = this.images[inputSel][uuid];
            delete this.images[inputSel][uuid];
            return this;
        },

        setImageInputValue: function (model) {
            var inputSel = model.get('input');
            console.log(this.$(inputSel));
            this.$(inputSel).val(JSON.stringify(this.images[inputSel])).trigger('change:nosave');
            this.$('#remove_images').val(JSON.stringify(this.images.removed));
        },

        getImageParams: function (model) {
            return {id: model.get('id'), label: model.get('label'), temp_location: model.get('temp_location')};
        },

        imageAdded: function (model) {
            this.addImage(model).setImageInputValue(model);

            if (Object.keys(this.images['#application_images']).length == this.maxImages) {
                this.disableUploadButton();
            }
        },

        imageUpdated: function (model) {
            this.removeImage(model).addImage(model).setImageInputValue(model);
        },

        imageDeleted: function (model) {

            this.removeImage(model).setImageInputValue(model);

            if (Object.keys(this.images['#application_images']).length < this.maxImages) {
                this.enableUploadButton();
            }

        },

        preventSubmit: function () {
            this.imagesUploading++;
        },

        allowSubmit: function () {
            this.imagesUploading--;

            if (this.imagesUploading <= 0) {
                this.imagesUploading = 0;
                this.$el.find('.error.image-upload').remove();
            }
        },

        disableUploadButton: function () {
            this.$('.fileupload-button').prop('disabled', true);
            this.$('#file').prop('disabled', true);
            this.$('.fileupload-button').after("<p class='upload-message'>* You've reached the maximum number of images</p>")
        },

        enableUploadButton: function () {
            this.$('.fileupload-button').prop('disabled', false);
            this.$('#file').prop('disabled', false);
            this.$('.upload-message').remove();
        }


    })
});