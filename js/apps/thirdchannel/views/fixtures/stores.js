define(function(require){
    var Backbone = require('backbone'),
        $ = require('jquery'),
        _ = require('underscore'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),

        FixtureStoreListCollection = Backbone.Collection.extend({
            url: function () {
                return context.links.fixtures.stores;
            }
        }),

        FixtureStores = Backbone.View.extend({
            el: "#fixturesList",

            render: function () {
                var self = this;
                this.stores = new FixtureStoreListCollection();
                this.stores.fetch()
                .done(function () {
                    self.$el.html("");
                    self.$el.append(HandlebarsTemplates["thirdchannel/fixtures/fixture_stores"]({stores: this.stores.toJSON(), store_url:context.links.program_stores.self}));
                }.bind(this));
            }

        });


    return FixtureStores;

});