define(function (require) {
     var Backbone = require('backbone'),
        context = require('context'),
        $ = require('jquery'),
        Templates = require('handlebarsTemplates'),

        StoreListUploadView = {

            el: "#storeUploadStatus",

            initialize: function () {
                this.listenTo(context, "stores:file:selected", this.handleFile);
            },

            handleFile: function (files) {
                this.show(files);
                this.sendFile(files[0])
                    .done(function (data) {
                        this.$el.html(Templates["oddjob/stores/upload/confirm"](data));
                        context.trigger('stores:uuids:true', data.uuids);
                    }.bind(this))
                    .fail(function (response) {
                        var data = {
                            fileName: files[0].name,
                            message: response.responseJSON.message
                        };
                        this.$el.html(Templates["oddjob/stores/upload/error"](data));
                    }.bind(this));


            },

            show: function (files) {
                this.$el.html(Templates["oddjob/stores/upload/show"](files[0]));
                this.$el.fadeIn();

            },

            sendFile: function (file) {
                var data = new FormData();
                data.append("storeList", file);
                return $.ajax({
                    url: context.links.upload,
                    type: 'POST',
                    data: data,
                    cache: false,
                    dataType: 'json',
                    processData: false, // Don't process the files
                    contentType: false, // Set content type to false as jQuery will tell the server its a query string request
                });
            }
        };

    return Backbone.View.extend(StoreListUploadView);
});