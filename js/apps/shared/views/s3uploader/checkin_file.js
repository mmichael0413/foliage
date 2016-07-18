define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        SerializeObject = require("serializeObject"),
        FileModel = require('shared/models/s3uploader/file'),
        ImageModel = require('thirdchannel/models/checkins/show/image'),
        ImageView = require('shared/views/s3uploader/checkin_image'),
        UploadView = require('shared/views/s3uploader/upload');

    return Backbone.View.extend({
        template: HandlebarsTemplates['shared/s3uploader/checkin_image'],
        events: {
            "change input[type=file]" : "fileChanged",
            "click .error-close" : "errorRemove"
        },
        initialize: function() {
            var self = this;

            this.imageType = self.$el.data('image-type');
            this.$form = $('.s3_uploader');
            this.$viewer = this.$('.viewer');

            this.$('.holder').each(function() {
                var $holder = $(this),
                    m = new ImageModel({
                        id: $holder.find('.image_id').val(),
                        image_type: self.imageType,
                        label: $holder.find('.image_label').val(),
                        temp_location: $holder.find('.image_temp_location').val(),
                        programId: self.model.get('programId'),
                        checkinId: self.model.get('checkinId'),
                        submissionId: self.model.get('submissionId')
                    });

                if(self.imageType === 'before') {
                    self.model.beforeImages.add(m);
                }

                // ...
                m.beforeImages = self.model.beforeImages;

                new ImageView({model: m}).setElement(this);
            });
        },
        render: function() {

            return this;
        },
        fileChanged: function(e) {
            var file = e.target.files[0],
                self = this;
            
            if (file && file.size <= (15 << 20)) {
                var reader = new FileReader();
                reader.onload = (function(event) {
                    var model = new FileModel({url: self.$form.attr('action'), policy: self.$form.serializeObject(), source: event.target.result});
                    self.$viewer.append(new UploadView({model: model}).render().$el);
                    model.save({file: file})
                         .success(function() {
                            model.set({source: event.target.result});
                            self.fileUploaded(model);
                         }).error(function(data) {
                            var msg = data.statusText === "abort" ? "You have cancelled the upload." :
                            "The image uploader has encountered an error.  " +
                            "This is most likely due to a bad internet connection.  " +
                            "Please check your connection and try again or wait until " +
                            "you can get a better connection.";
                            self.fileUploadError(msg);
                         });
                    self.clearFileInput();
                });

                reader.readAsDataURL(file);
            }
            else if (file) {
                self.fileUploadError("The size of your file is too large! File Size: " + file.size / 1000000 + " MB (Max: 15 MB)");
                self.clearFileInput();
            }
        },
        fileUploadError: function(error) {
            var $error = this.$('.uploader-error');
            if ($error.length > 0) {
                $error.html(HandlebarsTemplates['shared/s3uploader/error']({errorMsg: error}));
            } else {
                this.$viewer.prepend(HandlebarsTemplates['shared/s3uploader/error']({errorMsg: error}));
            }
        },
        errorRemove: function(e) {
            this.$('.uploader-error').remove();
        },
        fileUploaded: function(file) {
            var self = this,
                image = new ImageModel({
                    image_type: this.imageType,
                    temp_location: file.get('temp_location'),
                    programId: this.model.get('programId'),
                    checkinId: this.model.get('checkinId'),
                    submissionId: this.model.get('submissionId')
                });

            image.save().then(function() {
                if(self.imageType === 'before') {
                    self.model.beforeImages.add(image);
                }

                // ...
                image.beforeImages = self.model.beforeImages;

                var view = new ImageView({model: image});

                view.render();

                // ...
                if(self.imageType === 'after') {
                    view.renderOptions();
                }

                self.$viewer.append(view.$el);
            }).fail(function() {
                self.fileUploadError();
            });
        },
        clearFileInput: function() {
            var input = this.$("input:file");
            input.replaceWith(input.val('').clone(true));
        }
    });
});