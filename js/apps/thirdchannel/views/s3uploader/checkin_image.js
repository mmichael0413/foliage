define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/s3uploader/checkin_image'],
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

            context.trigger('image:added', this.model);
            return this;
        },
        updated: function (e) {
            this.model.set({label: e.target.value});
            context.trigger('image:updated', this.model);
        },
        deleted: function (e) {
            context.trigger('image:deleted', this.model);
            this.remove();
        }
    });
});