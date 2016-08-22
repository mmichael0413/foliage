define(function(require){
    var Backbone = require('backbone'),
        buttons = require('buttons'),
        $ = require('jquery'),
        _ = require('underscore'),
        context = require('context'),
        TypeTile = require('thirdchannel/views/fixtures/typeTile'),
        HandlebarsTemplates = require('handlebarsTemplates'),


        TypesCollection = Backbone.Collection.extend({
            comparator: "name",
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

            /**
             * Give a type and breakdown array, will look for the type's information in the breakdown structure and join it with the 
             * type object for display. 
             * 
             * @param  {[type]} type      [description]
             * @param  {[type]} breakdown [description]
             * @return {[type]}           [description]
             */
            alignBreakdown: function(type, breakdown) {                
                var specific = _.find(breakdown, function (item) {
                    return item.entityTypeUuid == type.id;
                });
                if (specific) {
                    type.set({total: specific.total, matching: specific.problems, stores: specific.stores, problems: specific.possibleProblems});
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
                    type.set({
                        "imageError": context.links.fixtures.image_error,
                        total: 0, matching: 0, stores: 0,
                        "detailsUrl": context.links.fixtures.details
                    });
                    self.alignBreakdown(type, self.types.breakdown);
                    self.$el.append((new TypeTile({model:type}).render()).el);
                });
            }

        });


    return Overview;

});