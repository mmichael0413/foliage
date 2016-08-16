define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        _ = require('underscore'),
        FixtureDetails = require('thirdchannel/views/fixtures/details/fixture');


    return Backbone.View.extend({
        el: "#fixturesList",
        

        render: function () {
            var self = this;
            self.$el.html("");
            window.bootstrap.data.forEach(function (fixture) {
                self.$el.append(new FixtureDetails({model:fixture}).render().$el);
            });
        }
    });

});