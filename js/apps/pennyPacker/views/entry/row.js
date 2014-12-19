define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        /**
         * Represents the Base Row for an Entry in the list view
         * 
         * @exports 'pennyPacker/views/entry/row'
         */
        EntryRowView = {
            template: '',
            initialize: function (options) {
                this.model = options.model;
                this.listenTo(this.model, 'sync', this.render);
            },

            events: function () {
                // for some crazy reason, I can only get the events to work if I declare them as a 
                // function. Zero idea why
                return {
                    'click .validate': 'toggleValidation'
                };
            },

            render: function () {
                this.$el.html(Templates[this.template](this.model.toJSON()));
                return this;
            },

            toggleValidation: function (e) {
                e.preventDefault();
                e.stopPropagation();
                // add a little effect to the validation button
                this.toggleButtonSpinner($(e.currentTarget).find('i'));
                this.model.save("valid", !this.model.get('valid'), {patch:true});
            },

            toggleButtonSpinner: function ($btn) {
                $btn.toggleClass('ic_check');
                $btn.toggleClass('fa fa-spin fa-spinner');
            }


        };

    return Backbone.View.extend(EntryRowView);

});