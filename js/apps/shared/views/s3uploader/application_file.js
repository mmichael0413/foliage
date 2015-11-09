define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        SerializeObject = require("serializeObject"),
        FileModel = require('shared/models/s3uploader/file'),
        ImageModel = require('erudition/models/image'),
        ImageView = require('shared/views/s3uploader/application_image'),
        UploadView = require('shared/views/s3uploader/upload');

    return Backbone.View.extend({
        template: HandlebarsTemplates['shared/s3uploader/checkin_image'],
        events: {
            "change input[type=file]" : "fileChanged",
            "click .error-close" : "errorRemove"
        },
        initialize: function(options) {
            var self = this;

            this.inputTemplate = options.inputTemplate;
            this.imageType = self.$el.data('image-type');
            this.$form = $('.s3_uploader');
            this.$viewer = this.$('.image-viewer');

            this.collection = options.collection;
            _.each(this.$('.image'), function(image){
                var model = new ImageModel({
                    image_type: self.imageType,
                    temp_location: $(image).find('input[type=hidden]').val(),
                    image_src: $(image).find('img').attr('src'),
                    hideDescription: true
                });
                self.collection.add(model);
                var f= new ImageView({model: model}).setElement(image);
            });

            this.listenTo(this.collection, 'destroy', this.renderImages);
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
                $error.html(HandlebarsTemplates['shared/s3uploader/error']());
            } else {
                this.$viewer.prepend(HandlebarsTemplates['shared/s3uploader/error']());
            }
        },
        errorRemove: function(e) {
            this.$('.error').remove();
        },
        fileUploaded: function(file) {
            var image = new ImageModel({
                    image_type: this.imageType,
                    temp_location: file.get('temp_location'),
                    image_src: file.get('temp_location'),
                    hideDescription: true
                });
            this.collection.add(image);
            var view = new ImageView({model: image, inputTemplate: this.inputTemplate, number: this.collection.models.length - 1});
            if(this.imageType == 'profileImage') {
                view.$el.removeClass('col-1-5');
                view.$el.addClass('col-2-5');
            }
            view.render();
            this.$viewer.append(view.$el);
        },
        clearFileInput: function() {
            var input = this.$("input:file");
            input.replaceWith(input.val('').clone(true));
        },

        renderImages: function (model) {
            if(model.get('image_type') == 'profileImage'){
                return;
            }

            var self = this;

            this.$el.html();
            var ctr = 0;
            _.each(this.collection.models, function(model){
                self.$viewer.append(new ImageView({model: model, number: ctr, inputTemplate: self.inputTemplate, suppressAddEvent: true}).render().el);
                ctr++;
            });
        }
    });
});