define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Registration = require('marketing/models/registration'),
        Serialize = require('serializeObject');

    return Backbone.View.extend({
        events: {
            'submit form': 'save'
        },

        initialize: function () {
            this.model = new Registration();
            this.model.url = this.$('form').attr('action');
            this.listenTo(this.model, 'invalid', this.displayErrors);
        },

        save: function(e) {
            var self = this;

            e.preventDefault();

            this.$('input').removeClass('error');
            this.$('.error-message').empty().hide();

            console.log(this.$('form').serializeObject());

            this.model.set(this.$('form').serializeObject());

            if(this.model.isValid()) {
                this.model.save().then(function() {
                    // Redirect to www2 /agents/opportunities
                }).fail(function() {
                    console.log('Errors From Server');
                    // display errors
                });
            }
        },

        displayErrors: function(model, errors, options) {
            var self = this;
            _.each(errors, function(error) {
                var attrName = Object.keys(error)[0];
                var message = error[attrName];
                var $input = self.$('[name="' + attrName + '"]');
                var $errorMessage = $input.next();
                $input.addClass('error');
                $errorMessage.html(message);
                $errorMessage.show();
            });
        }
    });
});