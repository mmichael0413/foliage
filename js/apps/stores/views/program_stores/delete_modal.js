define(function(require){
    var Backbone = require('backbone'),
        BackboneModal = require('backbone.modal'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.Modal.extend({
        cancelEl: '.cancel-button',

        events: {
            'keyup #name-confirmation': 'verifyNameConfirmation'
        },

        template: HandlebarsTemplates['stores/program_stores/delete'],

        getTemplateData: function () {
            return this.model.toJSON();
        },

        verifyNameConfirmation: function(e) {
            var $removeButton = this.$('.remove-button');

            var isDisabled = $removeButton.is(':disabled');

            if(this.model.get('name') === e.target.value && isDisabled) {
                $removeButton.prop('disabled', false);
            } else if(!isDisabled) {
                $removeButton.prop('disabled', true);
            }
        }
    });

});