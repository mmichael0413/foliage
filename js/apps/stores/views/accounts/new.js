define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        BackboneValidator = require('backboneValidator'),
        Templates = require('handlebarsTemplates');

    var View = Backbone.View.extend({
        template: Templates['stores/accounts/new'],
        events: {
            'submit form': 'save'
        },
        render: function() {
            this.$el.html(this.template());
            return this;
        },
        save: function(e) {
            e.preventDefault();

            var self = this;

            this.$('.errors').empty();
            this.$('.form-control').removeClass('error');

            this.model.set('name', this.$('[data-attr="name"]').val());

            if(this.model.isValid()) {
                this.model.save().done(function() {
                    context.router.navigate('/accounts', { trigger: true });
                    noty({
                        layout: 'top',
                        theme: 'relax',
                        text: 'Successfully created account.',
                        type: 'success',
                        animation: {
                            open: {height: 'toggle'},
                            close: {height: 'toggle'},
                            easing: 'swing',
                            speed: 500
                        },
                        timeout: 2500
                    });
                }).fail(function(response) {
                    console.log(response);
                    self.displayError('Failed to create account');
                });
            } else {
                _.each(this.model.validate(), function(errors, attr) {
                    console.log(attr);
                    var $input = self.$('[data-attr="' + attr + '"]');
                    var $errors = $input.next();

                    $input.addClass('error');

                    $errors.html(errors[0]);
                    $errors.addClass('error');
                });
                this.displayError('Please review the errors below.');
            }
        },
        displayError: function(message) {
            noty({
                layout: 'top',
                theme: 'relax',
                text: message,
                type: 'error',
                animation: {
                    open: {height: 'toggle'},
                    close: {height: 'toggle'},
                    easing: 'swing',
                    speed: 500
                },
                timeout: 2500
            });
        }
    });

    return View;
});