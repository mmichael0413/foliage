define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),

        TypeTile = {

            className: "fixture-type-tile",

            render: function () {
                console.log(this.model);
                this.$el.html(HandlebarsTemplates["thirdchannel/fixtures/fixture_type_tile"](this.model.toJSON()));
                return this;
            }
        };

    return Backbone.View.extend(TypeTile);        
});