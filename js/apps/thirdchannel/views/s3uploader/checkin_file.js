define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        SerializeObject = require("serializeObject"),
        FileModel = require('thirdchannel/models/s3uploader/file'),
        ImageView = require('thirdchannel/views/s3uploader/checkin_image'),
        UploadView = require('thirdchannel/views/s3uploader/upload');

    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/s3uploader/checkin_image'],
        events: {
            "change input[type=file]" : "fileChanged",
            "click .error-close" : "errorRemove"
        },
        initialize: function(options) {
            var self = this;

            this.savedImages = options.savedImages;

            this.$form = $('.s3_uploader');
            this.$viewer = this.$('.viewer');

            // initialize image views for each existing image
            this.$el.find('.holder').each(function() {
                var $holder = $(this),
                    m = new Backbone.Model({
                        id: $holder.find('.image_id').val(),
                        image_type: self.$el.data('image-type'),
                        group_label: $holder.find('.image_group_label').val(),
                        label: $holder.find('.image_label').val(),
                        temp_location: $holder.find('.image_temp_location').val()
                    });

                new ImageView({model: m}).setElement(this);
            });
        },
        render: function() {
            // render saved localstorage images
            return this;
        },
        fileChanged: function (e) {
            var file = e.target.files[0],
                self = this;

            if (file !== undefined) {
                var reader = new FileReader();
                reader.onload = (function (event) {
                    var model = new FileModel({url: self.$form.attr('action'), policy: self.$form.serializeObject(), source: event.target.result, input: self.$el.data('input')});
                    self.$viewer.append(new UploadView({model: model}).render().$el);
                    model.save({file: file})
                         .success(function () {
                            model.set({source: event.target.result});
                            self.fileUploaded(model);
                         })
                        .error(function () {
                            self.fileUploadError();
                        });
                    self.clearFileInput();
                });

                reader.readAsDataURL(file);
            }
        },
        fileUploadError: function() {
            var $error = this.$el.find('.error');
            if ($error.length > 0) {
                $error.html(HandlebarsTemplates['thirdchannel/s3uploader/error']());
            } else {
                this.$viewer.prepend(HandlebarsTemplates['thirdchannel/s3uploader/error']());
            }
        },
        errorRemove: function(e) {
            this.$('.error').remove();
        },
        fileUploaded: function(model) {
            var image = new Backbone.Model({
                image_type: this.$el.data('image-type'),
                temp_location: model.get('temp_location')
            });
            this.$viewer.append(new ImageView({model: image}).render().$el);
        },
        clearFileInput: function() {
            var input = this.$form.find("input:file");
            input.replaceWith(input.val('').clone(true));
        }
    });
});