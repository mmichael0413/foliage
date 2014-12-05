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
            this.model.url = this.$('form').attr('action') + '.json';
            this.listenTo(this.model, 'invalid', this.displayErrors);
        },

        save: function(e) {
            var self = this;

            e.preventDefault();

            this.$('input').removeClass('error');
            this.$('.error-message').empty().hide();

            this.model.set(this.$('form').serializeObject());

            if(this.model.isValid()) {
                this.$('input, button').prop('disabled', true);
                this.model.save().then(function() {
                    window.location.href = self.$el.data('base-url') + "/agents/opportunities";
                }).fail(function() {
                    console.log('Errors From Server');

                    self.$('input, button').prop('disabled', false);
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