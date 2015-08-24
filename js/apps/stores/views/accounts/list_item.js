define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Noty = require('noty'),
        context = require('context'),
        Templates = require('handlebarsTemplates');

    var View = Backbone.View.extend({
        template: Templates['stores/accounts/list_item'],
        className: 'pure-g item account-list-item',
        events: {
            'click .edit': 'startEditing',
            'click .cancel': 'endEditing',
            'click .save': 'save'
        },
        initialize: function() {
            this.isEditing = false;
        },
        render: function() {
            var data = _.clone(this.model.attributes);
            data.isEditing = this.isEditing;
            this.$el.html(this.template(data));
            return this;
        },
        startEditing: function(e) {
            e.preventDefault();
            this.isEditing = true;
            this.originalAttributes = this.model.attributes;
            this.render();
        },
        endEditing: function(e) {
            e.preventDefault();
            this.isEditing = false;
            if(this.originalAttributes) {
                this.model.set(this.originalAttributes);
            }
            this.render();
        },
        save: function(e) {
            e.preventDefault();
            var self = this;

            var name = this.$('.name').val().trim();

            if(name && name !== '') {
                this.model.save({name: name}).done(function() {
                    self.originalAttributes = null;
                    self.endEditing(e);
                    noty({
                        layout: 'top',
                        theme: 'relax',
                        text: 'Account Successfully Saved',
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
                    // TODO: parse the errors and display in the message
                    self.displayError('There were errors with provided account information.');
                });
            } else {
                this.displayError('There were errors with provided account information.');
                this.$('.name').addClass('error');
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