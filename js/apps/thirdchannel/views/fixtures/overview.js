define(function(require){
    var Backbone = require('backbone'),
        $ = require('jquery'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),

        TypesCollection = Backbone.Collection.extend({
            parse: function (response) {
                return response.types;
            },
            url: function () {
                return context.links.fixtures.types;
            }
        }),

        Overview = Backbone.View.extend({
            el: "#fixturesList",

            render: function () {
                var self = this;
                this.types = new TypesCollection();
                this.types.fetch()
                .done(function () {
                    self.$el.html("");
                    this.types.each(function(type) {
                        type.set("imageError", context.links.fixtures.image_error);
                        self.$el.append(HandlebarsTemplates["thirdchannel/fixtures/fixture_overview_item"](type.toJSON()));
                    });
                }.bind(this));
            }

        });


    return Overview;

});