define(function (require) {

    var Backbone = require('backbone'),
        $ = require('jquery'),
        templates = require('handlebarsTemplates'),
        Noty = require('noty'),
        context = require('context'),

        VisitView = {
            template: templates['pennyPacker/travel/entry'],

            parentView: null,

            events: {
                'click .create-travel-entry': 'createTravelEntry'
            },

            initialize: function(options) {
                this.parentView = options.parentView;
            },

            render: function() {
                this.$el.html(this.template(this.model.attributes));
                return this;
            },

            createTravelEntry: function(e) {
                e.preventDefault();
                // on success remove view/model
                // this.model.collection.remove(this.model);
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
                        self.parentView.removeChildView(self);
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
                this.unbind();
                this.remove();
            }
        };

    return Backbone.View.extend(VisitView);
});