define(function(require) {
    var Backbone = require('backbone'),
        context = require('context');

    return Backbone.Model.extend({
        url: function() {
            return context.base_url + '/schedule/' + this.id + '/estimate';
        },
        defaults: {
            travel: 0
        }
    });
});