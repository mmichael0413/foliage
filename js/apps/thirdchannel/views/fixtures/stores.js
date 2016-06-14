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
                    // this.types.each(function(type) {
                    //     self.$el.append(HandlebarsTemplates["thirdchannel/fixtures/fixture_stores"](type.toJSON()));
                    // });
                    self.$el.append(HandlebarsTemplates["thirdchannel/fixtures/fixture_stores"]({stores: this.stores.toJSON()}));
                }.bind(this));
            }

        });


    return FixtureStores;

});