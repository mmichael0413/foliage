define(function (require) {

    var Backbone = require('backbone'),
        $ = require('jquery'),
        templates = require('handlebarsTemplates'),
        Noty = require('noty'),
        context = require('context'),
        TravelEntryView = require('pennyPacker/views/travel/travelEntry'),
        Entry = require('pennyPacker/models/entry'),

        VisitView = {
            className: 'entry',
            template: templates['pennyPacker/travel/entry'],

            childViews: [],

            events: {
                'click .create-travel-entry': 'createTravelEntry'
            },

            render: function() {
                this.$el.html(this.template(this.model.attributes));
                return this;
            },

            createTravelEntry: function(e) {
                e.preventDefault();
                
                var self = this;

                var personName = this.model.get('person').name,
                    locationName = this.model.get('locationName'),
                    date = this.model.get('date');

                var message = personName + ', ' + locationName + ' on ' + date;

                if(confirm('Are you sure you want to create a travel entry for ' + message)) {
                    this.model.createTravel().done(function(resp) {
                        noty({
                            layout: 'topCenter',
                            theme: 'relax',
                            text: 'Successfully created travel entry for ' + message,
                            type: 'success',
                            animation: {
                                open: {height: 'toggle'},
                                close: {height: 'toggle'},
                                easing: 'swing',
                                speed: 500
                            },
                            timeout: 2500
                        });
                        self.model.collection.remove(self.model);

                        // Display the travel payout
                        var travelEntryView = new TravelEntryView({model: new Entry(resp)});
                        self.$el.html(travelEntryView.render().el);
                        self.childViews.push(travelEntryView);
                    }).fail(function(resp, textStatus, errorThrown) {
                        var errorMessage = 'Whoops, something went wrong... Contact tech support.';
                        if(resp.responseJSON.error) {
                            errorMessage = resp.responseJSON.error;
                        }
                        noty({
                            layout: 'topCenter',
                            theme: 'relax',
                            text: errorMessage,
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
                }
            },

            leave: function() {
                _.each(this.childViews, function(v) {
                    v.remove();
                });
                this.unbind();
                this.remove();
            }
        };

    return Backbone.View.extend(VisitView);
});