define(function(require){
    var Backbone = require('backbone'),
        BackboneModal = require('backbone.modal'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.Modal.extend({

        template: function () {
            return HandlebarsTemplates['thirdchannel/modals/processing'](this.getTemplateData());
        },

        getTemplateData: function () {
            return this.model.toJSON();
        },

        beforeCancel: function () {
            return false;
        }
    });
});