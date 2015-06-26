define(function (require) {

    var Backbone = require('backbone'),
        Pikaday = require('pikaday'),
        validator = require('jquery-validate'),
        $ = require('jquery'),
        templates = require('handlebarsTemplates'),
        context = require('context'),

        MissingTravelView = {
            el: '#travel',
            template: templates['pennyPacker/travel/missing'],

            events: {
                'submit form': 'findMissing'
            },

            render: function() {
                this.$el.html(this.template({program: context.programId}));
                this.configureDatepicker();
                this.$("form").validate();
                return this;
            },

            configureDatepicker: function() {
                this.$(".datepicker").each(function() {
                    var $input = $(this);

                    var picker = new Pikaday({
                        format: 'YYYY-MM-DD',
                        bound: false,
                        field: this,
                        onSelect: function() {
                            $input.val(this.toString());
                        }
                    })
                });

                this.$('.pika-single').addClass('col-1-1');
            },

            findMissing: function(e) {
                e.preventDefault();
                console.log(this.$('.end-date').val());
            }

        };

    return Backbone.View.extend(MissingTravelView);
});