define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context');

    return Backbone.View.extend({
        template: HandlebarsTemplates['shared/s3uploader/upload'],
        events: {
            "click .cancel" : "cancel"
        },
        initialize: function (options) {
            this.model = options.model;
            this.model.on('progress', this.updateProgress, this).on('error', this.serverError, this).on('complete', this.cleanup, this);
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.progressBar = this.$el.find('.progress .bar');
            this.percentage = this.$el.find('.percentage');
            context.trigger("upload:start");
            return this;
        },
        updateProgress: function (data) {
            this.progressBar.width(data+'%');
            this.percentage.text(data+'%');
        },
        serverError: function(e) {
            context.trigger("upload:error", e);
            this.remove();
        },
        cancel: function(e) {
            this.model.abort();
            this.cleanup(e);
        },
        cleanup: function(e) {
            context.trigger("upload:complete");
            this.remove();
        }
    });
});