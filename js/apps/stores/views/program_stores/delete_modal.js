define(function(require){
    var Backbone = require('backbone'),
        BackboneModal = require('backbone.modal'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.Modal.extend({
        cancelEl: '.bbm-button',

        template: HandlebarsTemplates['stores/program_stores/delete'],

        getTemplateData: function () {
            return this.model.toJSON();
        }
    });

});