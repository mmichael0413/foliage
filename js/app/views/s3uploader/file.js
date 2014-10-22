define(function(require) {
    var Backbone = require('backbone'),
        SerializeObject = require("serializeObject"),
        FileModel = require('app/models/s3uploader/file');

    return Backbone.View.extend({
        events: {
            "change input[type=file]" : "fileChanged"
        },
        initialize: function (options) {
        },
        render: function (element) {
            this.setElement(element);
            this.model = new FileModel({url: this.$el.attr('action'), policy: this.$el.serializeObject()});
            return this;
        },
        fileChanged: function (e) {
            this.model.save({file: e.target.files[0]});
        }
    });
});