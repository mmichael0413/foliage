define(function(require){
    var Backbone = require('backbone'),
        BackboneModal = require('backbone.modal'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.Modal.extend({
        templateName: 'thirdchannel/modals/reports/checkins/choices',
        initialize: function (options) {
            this.model = options.model;
        },
        template: function () {
            return HandlebarsTemplates[this.templateName](this.getTemplateData());
        },
        getTemplateData: function () {
            return this.model.toJSON();
        },
        cancelEl: '.bbm-button'
    });

});