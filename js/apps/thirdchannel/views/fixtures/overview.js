define(function(require){
    var Backbone = require('backbone'),
        buttons = require('buttons'),
        $ = require('jquery'),
        _ = require('underscore'),
        context = require('context'),
        TypeTile = require('thirdchannel/views/fixtures/typeTile'),
        HandlebarsTemplates = require('handlebarsTemplates'),

        TypesCollection = Backbone.Collection.extend({
            parse: function (response) {
                this.breakdown = response.breakdown;
                return response.fixtures;
            },
            url: function () {
                return context.links.fixtures.types + window.location.search;
            }
        }),


        Overview = Backbone.View.extend({
            el: "#fixturesList",

            initialize: function () {
                this.types = new TypesCollection();
                this.listenTo(context, 'filter:query', this.fetch);
                this.listenTo(this.types, 'sync', this.render);
            },

            alignBreakdown: function(type, breakdown) {
                var specific = breakdown.problems.byType[type.get("id")];
                if (specific) {
                    var store_uuids = _.uniq(_.map(specific.entities, function (entity) {return entity.programStoreUuid;}));
                    type.set({total: specific.total, matching: specific.matching, stores: store_uuids.length});
                }
            },

            fetch: function () {
                this.$el.html(HandlebarsTemplates["thirdchannel/fixtures/overview_loading"]);
                this.types.fetch();
            },

            render: function () {
                var self = this;
                self.$el.html("");
                this.types.each(function(type) {
                    type.set({"imageError":context.links.fixtures.image_error, total: 0, matching: 0, stores: 0});
                    self.alignBreakdown(type, self.types.breakdown);
                    self.$el.append((new TypeTile({model:type}).render()).el);
                });
            }

        });


    return Overview;

});