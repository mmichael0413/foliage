define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        SerializeObject = require("serializeObject"),
        FileModel = require('thirdchannel/models/s3uploader/file'),
        ImageModel = require('thirdchannel/models/checkins/show/image'),
        ImageView = require('thirdchannel/views/s3uploader/checkin_image'),
        UploadView = require('thirdchannel/views/s3uploader/upload');

    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/s3uploader/checkin_image'],
        events: {
            "change input[type=file]" : "fileChanged",
            "click .error-close" : "errorRemove"
        },
        initialize: function() {
            var self = this;

            this.$form = $('.s3_uploader');
            this.$viewer = this.$('.viewer');

            this.$el.find('.holder').each(function() {
                var $holder = $(this),
                    m = new ImageModel({
                        id: $holder.find('.image_id').val(),
                        image_type: self.$el.data('image-type'),
                        group_label: $holder.find('.image_group_label').val(),
                        label: $holder.find('.image_label').val(),
                        temp_location: $holder.find('.image_temp_location').val(),
                        programId: self.model.get('programId'),
                        checkinId: self.model.get('checkinId')
                    });

                new ImageView({model: m}).setElement(this);
            });
        },
        render: function() {
            return this;
        },
        fileChanged: function(e) {
            var file = e.target.files[0],
                self = this;

            if(file !== undefined) {
                var reader = new FileReader();
                reader.onload = (function(event) {
                    var model = new FileModel({url: self.$form.attr('action'), policy: self.$form.serializeObject(), source: event.target.result});
                    self.$viewer.append(new UploadView({model: model}).render().$el);
                    model.save({file: file})
                         .success(function() {
                            model.set({source: event.target.result});
                            self.fileUploaded(model);
                         }).error(function() {
                            self.fileUploadError();
                         });
                    self.clearFileInput();
                });

                reader.readAsDataURL(file);
            }
        },
        fileUploadError: function() {
            var $error = this.$('.error');
            if ($error.length > 0) {
                $error.html(HandlebarsTemplates['thirdchannel/s3uploader/error']());
            } else {
                this.$viewer.prepend(HandlebarsTemplates['thirdchannel/s3uploader/error']());
            }
        },
        errorRemove: function(e) {
            this.$('.error').remove();
        },
        fileUploaded: function(file) {
            var self = this,
                image = new ImageModel({
                    image_type: this.$el.data('image-type'),
                    temp_location: file.get('temp_location'),
                    programId: this.model.get('programId'),
                    checkinId: this.model.get('checkinId')
                });

            image.save().then(function() {
                self.$viewer.append(new ImageView({model: image}).render().$el);
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