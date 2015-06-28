define(function (require) {

    var Backbone = require('backbone'),
        $ = require('jquery'),
        templates = require('handlebarsTemplates'),
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
                this.model.createTravel().done(function(m) {
                    console.log('travel entry created for checkin');
                }).fail(function(resp) {
                    console.log('something happened');
                    console.log(resp);
                });
            },

            leave: function() {
                this.unbind();
                this.remove();
            }
        };

    return Backbone.View.extend(VisitView);
});