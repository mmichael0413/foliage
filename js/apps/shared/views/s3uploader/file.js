define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        SerializeObject = require("serializeObject"),
        FileModel = require('shared/models/s3uploader/file'),
        ImageView = require('shared/views/s3uploader/image'),
        UploadView = require('shared/views/s3uploader/upload');

    return Backbone.View.extend({
        template: HandlebarsTemplates['shared/s3uploader/image'],
        events: {
            "change input[type=file]" : "fileChanged",
            "click .error-close" : "errorRemove"
        },
        render: function (element) {
            var self = this;
            this.setElement(element);
            this.form = this.$('form.s3_uploader');
            this.viewer = this.$('.viewer');

            this.$el.find('.holder').each(function(){
                new ImageView({model: new Backbone.Model().set({input: self.$el.data('input')})}).render(this);
            });
            return this;
        },
        fileChanged: function (e) {
            var file = e.target.files[0],
                self = this;

            if (file && file.size <= 15000000) {
                var reader = new FileReader();
                reader.onload = (function (event) {
                    var model = new FileModel({url: self.form.attr('action'), policy: self.form.serializeObject(), source: event.target.result, input: self.$el.data('input')});
                    self.viewer.append(new UploadView({model: model}).render().$el);
                    model.save({file: file})
                         .success(function () {
                            model.set({source: event.target.result});
                            self.fileUploaded(model);
                         })
                        .error(function (data) {
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
            var $error = this.$el.find('.uploader-error');
            if ($error.length > 0) {
                $error.html(HandlebarsTemplates['shared/s3uploader/error']({errorMsg: error}));
            } else {
                this.$('.viewer').prepend(HandlebarsTemplates['shared/s3uploader/error']({errorMsg: error}));
            }
        },
        errorRemove: function(e) {
            this.$('.uploader-error').remove();
        },
        fileUploaded: function (model) {
            this.viewer.append(new ImageView({model: model}).render().$el);
        },
        clearFileInput: function () {
            var input = this.$("input:file");
            input.replaceWith(input.val('').clone(true));
        }
    });
});