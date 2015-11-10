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

            if (file !== undefined) {
                var reader = new FileReader();
                reader.onload = (function (event) {
                    var model = new FileModel({url: self.form.attr('action'), policy: self.form.serializeObject(), source: event.target.result, input: self.$el.data('input')});
                    self.viewer.append(new UploadView({model: model}).render().$el);
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
                $error.html(HandlebarsTemplates['shared/s3uploader/error']());
            } else {
                this.$('.viewer').prepend(HandlebarsTemplates['shared/s3uploader/error']());
            }
        },
        errorRemove: function(e) {
            this.$('.error').remove();
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