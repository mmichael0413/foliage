define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        BackboneValidator = require('backboneValidator'),
        Templates = require('handlebarsTemplates'),
        AccountSimilarities = require('stores/collections/account_similarities'),
        AccountSimilaritiesView = require('stores/views/accounts/similar_accounts');

    var View = Backbone.View.extend({
        template: Templates['stores/accounts/new'],
        similarAccounts: false,
        events: {
            'keyup input[data-attr="name"]': 'retrieveSimilarities',
            'submit form': 'save'
        },
        initialize: function() {
            _.bindAll(this, 'handleSimilarities');
            this.accountSimilarities = new AccountSimilarities();
            this.accountSimilaritiesView = new AccountSimilaritiesView({collection: this.accountSimilarities});
            this.listenTo(this.accountSimilarities, 'reset', this.handleSimilarities);
        },
        render: function() {
            this.$el.html(this.template());
            this.accountSimilaritiesView.setElement(this.$('#similar-accounts'));
            this.accountSimilaritiesView.render();
            return this;
        },
        retrieveSimilarities: function(e) {
            e.preventDefault();
            var name = $.trim(e.target.value);
            if(name !== undefined && name !== '') {
                this.accountSimilarities.fetch({reset: true, data: { name: e.target.value }});
            } else {
                this.accountSimilarities.reset();
            }
        },
        handleSimilarities: function() {
            var $accountSaveButton = this.$('#account-save-button');
            if(this.accountSimilarities.length) {
                this.similarAccounts = true;

                var hasExactMatch = this.accountSimilarities.findWhere({similarity: 1});
                if(hasExactMatch) {
                    $accountSaveButton.prop('disabled', true);
                } else {
                    $accountSaveButton.prop('disabled', false);
                }
            } else {
                this.similarAccounts = false;

                var name = $.trim(this.$('input[data-attr="name"]').val());
                if(name !== undefined && name !== '') {
                    $accountSaveButton.prop('disabled', false);
                } else {
                    $accountSaveButton.prop('disabled', true);
                }

            }
        },
        save: function(e) {
            e.preventDefault();

            var message = 'Are you sure you want to add this new account?';
            if(this.similarAccounts) {
                message = 'This account is similar to existing accounts. ' + message;
            }

            if(!confirm(message)) {
                return;
            }

            var self = this;

            this.$('.errors').empty();
            this.$('.form-control').removeClass('error');

            var data = {};
            this.$('[data-attr]').each(function(i, el) { data[el.dataset.attr] = el.value; });

            this.model.set(data);

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