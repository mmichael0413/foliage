define(function(require){
    var Backbone = require('backbone'),
        BackboneModal = require('backbone.modal'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.Modal.extend({
        templates: {
            progress: 'thirdchannel/modals/export/progress',
            error: 'thirdchannel/modals/export/error',
            timeout: 'thirdchannel/modals/export/timeout',
            success: 'thirdchannel/modals/export/success'
        },
        cancelEl: '.bbm-button',
        initialize: function (options) {
            _.bindAll(this, 'fetchCSV', 'updateView');
            this.model = options.model;
            this.templateName = this.templates.progress;
            this.retries = 0;
        },
        template: function () {
            return HandlebarsTemplates[this.templateName](this.getTemplateData());
        },
        onRender: function () {
            if (this.templateName == this.templates.progress) {
                this.fetchCSV();
            }
        },
        onDestroy: function () {
            if (this.xhr !== undefined) {
                this.xhr.abort();
            }
        },
        fetchCSV: function () {
            var self = this;
            this.xhr = this.model.fetch({
                success: function (model, response, options) {
                    if (self.retries++ > 60) {
                        self.updateView(self.templates.timeout);
                    } else if (options.xhr.status == 202) {
                        setTimeout(self.fetchCSV, 5000);
                    } else {
                        self.updateView(self.templates.success);
                    }
                },
                error: function (model, response, options) {
                    self.updateView(self.templates.error);
                }
            });
        },
        updateView: function(template) {
            this.templateName = template;
            this.xhr = undefined;
            this.render();
        },
        getTemplateData: function () {
            return this.model.toJSON();
        }
    });

});