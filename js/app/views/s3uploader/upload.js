define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        template: HandlebarsTemplates['s3uploader/upload'],
        events: {
            "click .cancel" : "cleanup"
        },
        initialize: function (options) {
            this.source = options.source;
            this.model = options.model;
            this.model.on('progress', this.updateProgress, this);
            this.model.on('complete', this.cleanup, this);
        },
        render: function () {
            this.$el.html(this.template({source: this.source}));
            this.progressBar = this.$el.find('.progress .bar');
            this.percentage = this.$el.find('.percentage');
            return this;
        },
        updateProgress: function (data) {
            this.progressBar.width(data+'%');
            this.percentage.text(data+'%');
        },
        cleanup: function(e) {
            this.model.abort();
            this.remove();
        }
    });
});