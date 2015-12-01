define(function(require){
    var Backbone = require('backbone'),
        BackboneModal = require('backbone.modal'),
        Handlebars = require('handlebars'),
        Noty = require('noty'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.Modal.extend({
        cancelEl: '.cancel-button',

        events: {
            'keyup #name-confirmation': 'verifyNameConfirmation',
            'click .remove-button': 'confirm'
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
        },

        confirm: function(e) {
            e.preventDefault();

            this.model.destroy().then(function() {
                noty({
                    layout: 'top',
                    theme: 'relax',
                    text: 'Successfully removed ' + this.model.get('name'),
                    type: 'success',
                    animation: {
                        open: {height: 'toggle'},
                        close: {height: 'toggle'},
                        easing: 'swing',
                        speed: 500
                    },
                    timeout: 2500
                });

                this.triggerCancel();
            }.bind(this)).fail(function(response) {
                var error = JSON.parse(response.responseText);

                noty({
                    layout: 'top',
                    theme: 'relax',
                    text: 'Failed to remove ' + this.model.get('name'),
                    type: 'error',
                    animation: {
                        open: {height: 'toggle'},
                        close: {height: 'toggle'},
                        easing: 'swing',
                        speed: 500
                    },
                    timeout: 2500
                });

                this.triggerCancel();
            }.bind(this));
        }
    });

});