define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        template: HandlebarsTemplates['shared/s3uploader/image'],
        events: {
            "blur input": 'updated',
            "click button": 'deleted'
        },
        initialize: function (options) {
            this.model = options.model;
        },
        render: function ($element) {
            if ($element !== undefined) {
                this.setElement($element);
            } else {
                this.$el.html(this.template(this.model.toJSON()));
            }
            this.model.set({uuid:  Math.random().toString(36).substring(7), id: this.$el.data('id'), label: this.$el.find('.description input').val()});
            context.trigger('image:added', this.model);
            return this;
        },
        updated: function (e) {
            this.model.set({label: e.target.value});
            context.trigger('image:updated', this.model);
        },
        deleted: function (e) {
            var confirmDelete = confirm("Are you sure you want to delete this file?");
            if(confirmDelete) {
                context.trigger('image:deleted', this.model);
                this.remove();
            }
        }
    });
});