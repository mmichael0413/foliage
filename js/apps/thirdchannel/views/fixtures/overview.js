define(function(require){
    var Backbone = require('backbone'),
        $ = require('jquery'),
        _ = require('underscore'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),

        TypesCollection = Backbone.Collection.extend({
            parse: function (response) {
                this.breakdown = response.breakdown;
                return response.fixtures;
            },
            url: function () {
                return context.links.fixtures.types;
            }
        }),

        Overview = Backbone.View.extend({
            el: "#fixturesList",

            alignBreakdown: function(type, breakdown) {
                var specific = breakdown.problems.byType[type.get("id")];
                if (specific) {
                    var store_uuids = _.uniq(_.map(specific.entities, function (entity) {return entity.programStoreUuid;}));
                    type.set({total: specific.total, matching: specific.matching, stores: store_uuids.length});
                }
            },

            render: function () {
                var self = this;
                this.types = new TypesCollection();
                this.types.fetch()
                .done(function () {
                    self.$el.html("");
                    this.types.each(function(type) {
                        type.set({"imageError":context.links.fixtures.image_error, total: 0, matching: 0, stores: 0});
                        self.alignBreakdown(type, self.types.breakdown);
                        self.$el.append(HandlebarsTemplates["thirdchannel/fixtures/fixture_overview_item"](type.toJSON()));
                    });
                }.bind(this));
            }

        });


    return Overview;

});