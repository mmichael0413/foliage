define(function(require) {
    var context = require('context'),
        Backbone = require('backbone');

    return Backbone.View.extend({
        el: '.filter-container [name=search]',

        events: {
            "input": "broadcast"
        },

        render: function () {
            return this;
        },

        broadcast: function(e, data) {
            context.trigger('list:search:update', this.$el.val());
        }
    });
});
