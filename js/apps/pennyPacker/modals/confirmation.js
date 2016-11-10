define(function(require){
    var BaseModal = require('shared/modals/confirmation'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return BaseModal.extend({
        updateData: function(e) {
            var self = this;
            this.model.fetch({complete: function() {
                this.$('.confirmation-modal').html(HandlebarsTemplates[this.templates.success]());
                setTimeout(function() {self.triggerCancel();}, 1000);
            }.bind(this)});
        }
    });

});