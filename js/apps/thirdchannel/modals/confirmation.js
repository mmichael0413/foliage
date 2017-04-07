define(function(require){
    var Backbone = require('backbone'),
        BackboneModal = require('backbone.modal'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ProcessingModal = require('thirdchannel/modals/processing');


    return Backbone.Modal.extend({
        submitEl: '.bbm-submit',
        cancelEl: '.bbm-cancel',

        template: function () {
            return HandlebarsTemplates['thirdchannel/modals/confirmation'](this.getTemplateData());
        },

        getTemplateData: function () {
            return this.model.toJSON();
        },

        submit: function() {
            $('body').append(new ProcessingModal({model: new Backbone.Model({message: 'Deleting ' + this.model.get('type') + '...'})}).render().el);
            this.$('form').submit();
        }
    });
});