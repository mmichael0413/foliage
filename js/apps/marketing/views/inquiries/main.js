define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Inquiry = require('marketing/models/inquiry'),
        Serialize = require('serializeObject');


    return Backbone.View.extend({
        el: '#request-demo',

        events: {
            'submit form': 'save'
        },

        initialize: function () {
            this.model = new Inquiry();
            this.listenTo(this.model, 'invalid', this.displayErrors);
        },

        save: function(e) {
            e.preventDefault();
            var self = this;

            this.$('input, textarea').removeClass('error');

            this.model.set(this.$('form').serializeObject());

            if(this.model.isValid()) {
                this.model.save().then(function() {
                    self.$('form').hide();
                    self.$('.success-message').show();
                });/*.fail(function() {
                    console.log('Errors From Server');
                    // display errors
                });*/
            }
        },

        displayErrors: function(model, errors, options) {
            var self = this;
            _.each(errors, function(error) {
               var attrName = Object.keys(error)[0];
               self.$('[name="' + attrName + '"]').addClass('error');
            });
        }
    });
});