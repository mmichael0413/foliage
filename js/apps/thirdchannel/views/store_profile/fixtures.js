define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        _ = require('underscore'),
        FixtureDetails = require('thirdchannel/views/fixtures/details/fixture');


    return Backbone.View.extend({
        el: "#fixturesList",
        

        render: function () {
            var self = this,
                fixtures = window.bootstrap.data;
            self.$el.html("");
            if (fixtures && fixtures.length > 0) {
                fixtures.forEach(function (fixture) {
                    self.$el.append(new FixtureDetails({model:fixture}).render().$el);
                });
            } else {
                self.$el.append("<p>There are currently no tracked Assets for this store</p>");
            }
        }
    });

});