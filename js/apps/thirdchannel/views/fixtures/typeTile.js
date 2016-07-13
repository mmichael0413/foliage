define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),

        TypeTile = {

            className: "fixture-type-tile",

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