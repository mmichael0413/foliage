define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        Noty = require('noty');

    var View = Backbone.View.extend({
        template: Templates['stores/stores/geocode_list'],

        events: {
            'click .select-geocode': 'selectGeocode'
        },

        initialize: function() {
            _.bindAll(this, 'render');
            this.listenTo(this.collection, 'reset', this.render);
        },

        render: function() {
            this.$el.html(this.template({ geocodes: this.collection.toJSON() }));
            return this;
        },

        selectGeocode: function(e) {
            e.preventDefault();
            var $btn = $(e.target);
            var placeId = $btn.attr('data-place-id');

            var geocode = this.collection.findWhere({placeId: placeId});

            var self = this;
            if(confirm("Are you sure you want to update the store's address to " + geocode.get('formattedAddress') + "?")) {
                this.collection.store.updateGeocoding(geocode)
                    .done(function(response) {
                        self.collection.store.set(response);
                        noty({
                            layout: 'top',
                            theme: 'relax',
                            text: "Successfully updated store's address",
                            type: 'success',
                            animation: {
                                open: {height: 'toggle'},
                                close: {height: 'toggle'},
                                easing: 'swing',
                                speed: 500
                            },
                            timeout: 2500
                        });
                        self.remove();
                    })
                    .fail(function() {
                        noty({
                            layout: 'top',
                            theme: 'relax',
                            text: 'Failed to update geocode',
                            type: 'error',
                            animation: {
                                open: {height: 'toggle'},
                                close: {height: 'toggle'},
                                easing: 'swing',
                                speed: 500
                            },
                            timeout: 2500
                        });
                    }.bind(this));
            }
        }
    });

    return View;
});