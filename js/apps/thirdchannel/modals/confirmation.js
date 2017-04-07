define(function(require){
    var Backbone = require('backbone'),
        BackboneModal = require('backbone.modal'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.Modal.extend({
        cancelEl: '.bbm-button',

        template: function () {
            return HandlebarsTemplates['thirdchannel/modals/confirmation'](this.getTemplateData());
        },

        getTemplateData: function () {
            return this.model.toJSON();
        }
    });
});