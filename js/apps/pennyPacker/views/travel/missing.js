define(function (require) {

    var Backbone = require('backbone'),
        Pikaday = require('pikaday'),
        Noty = require('noty'),
        validator = require('jquery-validate'),
        $ = require('jquery'),
        templates = require('handlebarsTemplates'),
        context = require('context'),
        VisitGroups = require('pennyPacker/collections/missingTravelVisitGroups'),
        VisitGroupView = require('pennyPacker/views/travel/visitGroup'),

        MissingTravelView = {
            el: '#travel',
            template: templates['pennyPacker/travel/missing'],
            spinnerHTML: "<div class='status'><i class='fa fa-spin fa-spinner fa-2x'></div>",
            childViews: [],

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
                    });
                });

                this.$('.pika-single').addClass('col-1-1');
            },

            findMissing: function(e) {
                e.preventDefault();

                _.each(this.childViews, function(v) {
                    v.leave();
                });
                this.childViews = [];

                var $container = this.$('.body');

                $container.html(this.spinnerHTML);
                this.collection.fetch({
                    reset: true,
                    type: 'POST',
                    data: {
                        begin: this.$('input[name="begin"]').val(),
                        end: this.$('input[name="end"]').val()
                    }
                }).fail(function(response, textStatus, errorThrown) {
                    $container.html('');
                    noty({
                        layout: 'topCenter',
                        theme: 'relax',
                        text: 'Please select a begin and end date',
                        type: 'error',
                        animation: {
                            open: {height: 'toggle'},
                            close: {height: 'toggle'},
                            easing: 'swing',
                            speed: 500
                        },
                        timeout: 2500
                    });
                });
            },

            renderVisitGroups: function() {
                var self = this,
                    $body = this.$('.body');

                $body.html('');
                if(this.collection.isEmpty()) {
                    $body.html('No missing travel entries for checkins within range');
                } else {
                    this.collection.each(function(visitGroup) {
                        var v = new VisitGroupView({model: visitGroup});
                        $body.append(v.render().el);
                        self.childViews.push(v);
                    });
                }
            }

        };

    return Backbone.View.extend(MissingTravelView);
});