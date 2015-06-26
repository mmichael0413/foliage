define(function (require) {

    var Backbone = require('backbone'),
        Pikaday = require('pikaday'),
        validator = require('jquery-validate'),
        $ = require('jquery'),
        templates = require('handlebarsTemplates'),
        context = require('context'),
        VisitGroups = require('pennyPacker/collections/visitGroups'),
        VisitGroupView = require('pennyPacker/views/travel/visitGroup'),

        MissingTravelView = {
            el: '#travel',
            template: templates['pennyPacker/travel/missing'],

            events: {
                'submit form': 'findMissing'
            },

            initialize: function() {
                this.collection = new VisitGroups({programId: context.programId});

                this.listenTo(this.collection, 'reset', this.renderVisitGroups);
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

                    new Pikaday({
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
                this.collection.fetch({
                    reset: true,
                    type: 'post',
                    data: {
                        begin: this.$('input[name="begin"]').val(),
                        end: this.$('input[name="end"]').val(),
                        program: this.$('input[name="program"]').val()
                    }
                })
            },

            renderVisitGroups: function() {
                console.log(this.collection);
            }

        };

    return Backbone.View.extend(MissingTravelView);
});