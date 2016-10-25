define(function(require){
    var Backbone = require('backbone'),
        BackboneModal = require('backbone.modal'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.Modal.extend({
        templates: {
            progress: 'shared/confirmation/progress',
            error: 'shared/confirmation/error',
            success: 'shared/confirmation/success'
        },

        cancelEl: '.cancel-button',

        events: {
            'keyup #input-confirmation': 'verifyConfirmation',
            'click .confirm-button': 'confirm'
        },

        template: HandlebarsTemplates['shared/confirmation/modal'],

        getTemplateData: function () {
            return this.model.toJSON();
        },

        verifyConfirmation: function(e) {
            var $confirmButton = this.$('.confirm-button');

            var isDisabled = $confirmButton.is(':disabled');

            if(this.model.get("validationText") === e.target.value && isDisabled) {
                $confirmButton.prop('disabled', false);
            } else if(!isDisabled) {
                $confirmButton.prop('disabled', true);
            }
        },

        confirm: function(e) {
            e.preventDefault();
            this.updateDisplay(this.templates.progress);
            this.updateData(e);
        },

        updateData: function(e) {},

        updateDisplay: function(template) {
            this.$('.confirmation-modal').html(HandlebarsTemplates[template]());
        }
    });
});