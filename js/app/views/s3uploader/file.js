define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        SerializeObject = require("serializeObject"),
        FileModel = require('app/models/s3uploader/file'),
        ImageView = require('app/views/s3uploader/image'),
        UploadView = require('app/views/s3uploader/upload');

    return Backbone.View.extend({
        template: HandlebarsTemplates['s3uploader/image'],
        events: {
            "change input[type=file]" : "fileChanged"
        },
        initialize: function (options) {
        },
        render: function (element) {
            var self = this;
            this.setElement(element);
            this.form = this.$el.find('form.s3_uploader');
            this.viewer = this.$el.find('.viewer');

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
                         });
                    self.clearFileInput();
                });

                reader.readAsDataURL(file);
            }
        },
        fileUploaded: function (model) {
            this.viewer.append(new ImageView({model: model}).render().$el);
        },
        clearFileInput: function () {
            var input = this.$el.find("input:file");
            input.replaceWith(input.val('').clone(true));
        }
    });
});