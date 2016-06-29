define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        tagName: 'tr',
        template: HandlebarsTemplates['singleNickel/survey/list_item'],
        events: {
          'click .delete': 'removeSurvey',
          'click .lock': 'toggleLock',
          'click .reindex': 'reindexSurvey',
          'click .clone': 'toggleClone',
            'click .save-clone': 'cloneSurvey'
        },
        initialize: function() {
            _.bindAll(this, 'removeSurvey', 'toggleLock');
            this.listenTo(this.model, 'change:locked', this.render);
        },
        render: function() {
            var attributes = _.extend({survey: this.model}, this.model.toJSON());
            var customers = _.extend(attributes, {customers : context.customers.models});
            this.$el.html(this.template(customers));
            this.$el.attr("data-survey", this.model.get("id"));
            this.$el.find(".clone-customer-container").hide();
            return this;
        },
        removeSurvey: function(e) {
            e.preventDefault();
            var self = this;
            var confirmation = confirm('Are you sure you want to delete this survey?');
            if(confirmation) {
                this.model.destroy().success(function() {
                    self.remove();
                }).fail(function() {
                    context.trigger('error');
                });
            }
        },
        toggleLock: function(e) {
            e.preventDefault();
            var self = this;
            this.model.toggleLock().done(function(response) {
                self.model.set(response);
            }).fail(function() {
                context.trigger('error');
            });
        },
        toggleClone: function(e) {
            e.preventDefault();
            var container = this.$el.find(".clone-customer-container");

            if (container[0].className === 'clone-customer-container visible') {
                container.hide('fast', "linear");
                container.removeClass('visible');
            }
            else {
                container.addClass('visible');
                container.show('fast', "linear");
            }
        },
        reindexSurvey: function(e) {
            e.preventDefault();

            this.model.reindex().done(function(response) {
                alert('Successfully re-indexed survey');
            }).fail(function() {
                context.trigger('error');
            });
        },
        cloneSurvey: function(e) {
            e.preventDefault();

            var self = this;
            var customerUUID = this.$el.find(".clone-customer-select")[0].value;
            this.$el.find(".clone-customer-container").append("<i class='fa fa-spin fa-spinner'></i>");

            this.model.cloneSurvey(null, customerUUID).done(function(response) {
                if(response.customer_uuid === self.model.get('customer_uuid')) {
                    self.model.collection.add(response);
                }
                self.$el.find(".fa-spinner").remove();
                alert("Succesfully cloned survey to " + response.customer + '!');
            }).fail(function() {
                context.trigger('error');
                self.toggleClone(e);
            });
        }
    });
});