define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        template: HandlebarsTemplates['shared/s3uploader/application_image'],
        events: {
            "click .removeImage": 'deleted'
        },
        className: 'image col-1-5',
        initialize: function (options) {
            this.model = options.model;
            this.inputTemplate = options.inputTemplate;
            this.number = options.number ? options.number : 0;
            this.listenTo(this.model.collection, 'destroy', this.destroy);

            this.suppressAddEvent = options.suppressAddEvent ? options.suppressAddEvent : false;
        },
        render: function ($element) {
            if ($element !== undefined) {
                this.setElement($element);
            } else {
                var model = this.model.attributes;
                model.inputTemplate = this.inputTemplate;
                model.number = this.number;
                this.$el.html(this.template(model));
            }
            this.model.set({uuid:  Math.random().toString(36).substring(7), id: this.$el.data('id'), label: this.$el.find('.description input').val()});

            // this test is in place because this function is called on a newly created image and a re-rendering of an image
            // could we check if the model is new to do this instead?
            if(!this.suppressAddEvent) {
                context.trigger('image:added', this.model);
            }
            return this;
        },

        deleted: function (e) {
            var confirmDelete = confirm("Are you sure you want to delete this file?");
            if(confirmDelete) {
                context.trigger('image:deleted', this.model);
                this.model.destroy();
                this.remove();
            }
        },

        destroy: function () {
            this.remove();
        }
    });
});