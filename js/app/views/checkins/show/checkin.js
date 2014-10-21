define(function(require) {
    var Backbone = require('backbone'),
        Chosen = require('chosen');

    return Backbone.View.extend({
        el: ".checkin",
        initialize: function (options) {
        },
        render: function (options) {
            this.$el.find('select').chosen({disable_search: true, width: "100%"});
            return this;
        }
    });
});