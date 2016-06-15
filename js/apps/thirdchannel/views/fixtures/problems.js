define(function(require){
    var Backbone = require('backbone'),
        $ = require('jquery'),
        _ = require('underscore'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),

        ProblemFixturesCollection = Backbone.Collection.extend({
            url: function () {
                return context.links.fixtures.problem;
            },
            parse: function (response) {
                return response.fixtures;
            }

        }),

        ProblemFixture = Backbone.View.extend({
            el: "#fixturesList",

            render: function () {
                var self = this;
                this.stores = new ProblemFixturesCollection();
                this.stores.fetch()
                .done(function () {
                    self.$el.html("");
                    self.$el.append(HandlebarsTemplates["thirdchannel/fixtures/fixture_problems"]({fixtures: this.stores.toJSON(), store_url: context.links.program_stores.self}));
                }.bind(this));
            }

        });


    return ProblemFixture;

});