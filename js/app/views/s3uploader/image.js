define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        template: HandlebarsTemplates['s3uploader/image'],
        events: {
            "blur input": 'updated',
            "click button": 'deleted'
        },
        initialize: function (options) {
            this.model = options.model;
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            context.trigger('file:added', this.model);
            return this;
        },
        updated: function (e) {
            this.model.set({label: ((this.captionPrefix !== undefined) ? this.captionPrefix + ": " + e.target.value : e.target.value)});
            context.trigger('file:updated', this.model);
        },
        deleted: function (e) {
            context.trigger('file:deleted', this.model);
            this.remove();
        }
    });
});