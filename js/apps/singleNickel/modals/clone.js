define(function(require){
    var Backbone = require('backbone'),
        context = require('context'),
        BackboneModal = require('backbone.modal'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.Modal.extend({
        templates: {
            clone: 'singleNickel/modals/clone/clone'
        },
        events: {
            'click .save-clone': 'cloneSurvey',
            'change .go-to' : 'updateSelect'
        },
        cancelEl: '.bbm-button',
        initialize: function () {
            this.templateName = this.templates.clone;
        },
        template: function () {
            return HandlebarsTemplates[this.templateName](this.getTemplateData());
        },
        updateSelect : function(e) {
          $(".go-to").not($(e.currentTarget)).prop("checked", false);
        },
        cloneSurvey: function(e) {
            e.preventDefault();
            var self = this;
            var customerUUID = this.$el.find("#cloneCustomerSelect")[0].value;
            var goToSurvey = this.$el.find("#goToSurvey")[0].checked;
            var goToCustomer = this.$el.find("#goToCustomer")[0].checked;

            this.$el.find(".save-clone").append("<i class='fa fa-spin fa-spinner'></i>");

            this.model.cloneSurvey(null, customerUUID).done(function(response) {
                if(response.customer_uuid === self.model.get('customer_uuid')) {
                    self.model.collection.add(response);
                }

                alert("Succesfully cloned survey to " + response.customer + '!');

                if(goToSurvey) {
                    context.customerId = response.customer_uuid;
                    context.router.navigate("surveys/" + response.id, true);
                }
                else if(goToCustomer) {
                    context.router.navigate(response.customer_uuid + "/surveys", true);
                }

                self.$el.find(".fa-spinner").remove();
                context.modal.destroy();

            }).fail(function() {
                context.trigger('error');
                self.$el.find(".fa-spinner").remove();
            });
        },
        getTemplateData: function () {
            var data = this.model.toJSON();
            var customers = _.extend(data, {customers: context.customers.models});
            return customers;
        }
    });

});