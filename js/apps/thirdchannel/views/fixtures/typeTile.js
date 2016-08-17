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

            buildProblemsQueryString: function (data) {
                var qs = "&problems[]=";

                if (data.problems.constructor === Array) {
                    qs += data.problems.join("&problems[]=");
                    data.problemsDisplay = qs;
                } else {
                    console.warn("Problems needs to be an array before it can be turned into a query string. instead, received a ", typeof data.problems);
                }
                
            },

            render: function () {
                var attributes = this.model.get("attributes"),
                    data = this.model.toJSON(),
                    nameMax = 45;
                    
                if (attributes.hasOwnProperty("fixtureImages") && attributes.fixtureImages.length >= 1) {
                    //data.imageUrl = attributes.fixtureImages[attributes.fixtureImages.length-1].links[2].href
                    data.imageUrl = attributes.fixtureImages[0].original;
                }
                if (data.matching > 0) {
                    data.alert = true;
                }
                
                if (data.problems) {
                    this.buildProblemsQueryString(data);
                }
                
                // tc-4583, truncates the name of the fixture if it's too long
                if (data.name.length > nameMax) {
                    data.name = data.name.substring(0,nameMax-1) + "...";
                }

                this.$el.html(HandlebarsTemplates["thirdchannel/fixtures/fixture_type_tile"](data));
                return this;
            }
        };

    return Backbone.View.extend(TypeTile);        
});