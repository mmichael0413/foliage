define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        FixtureDetailsModal = require('thirdchannel/modals/fixtures/fixture_details'),

        TypeTile = {

            className: "fixture-type-tile",

            events: {
                'click .more-info': 'loadModal'
            },

            loadModal: function () {
                this.modal = new FixtureDetailsModal({model: this.model});
                this.$el.append(this.modal.render().$el);
            },

            render: function () {
                var attributes = this.model.get("attributes"),
                    data = this.model.toJSON();
                    
                if (attributes.hasOwnProperty("fixtureImages") && attributes.fixtureImages.length >= 1) {
                    //data.imageUrl = attributes.fixtureImages[attributes.fixtureImages.length-1].links[2].href
                    data.imageUrl = attributes.fixtureImages[0].original;
                }
                this.$el.html(HandlebarsTemplates["thirdchannel/fixtures/fixture_type_tile"](data));
                return this;
            }
        };

    return Backbone.View.extend(TypeTile);        
});