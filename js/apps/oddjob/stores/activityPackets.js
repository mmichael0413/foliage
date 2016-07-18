define(function (require) {
    var Backbone = require('backbone'),
        context = require('context');

    var ActivityPacketsStore = function () {
        return new (Backbone.Collection.extend({
            url: function () {
                return context.links.activityPackets;
            }
        }))();
    };
    return ActivityPacketsStore();
    
});