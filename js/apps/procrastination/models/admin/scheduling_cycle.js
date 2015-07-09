define(function(require) {
    var Backbone = require('backbone'),
        context = require('context');

    return Backbone.Model.extend({
        parse: function(data) {
            if(data.statusPercentages['Complete']) {
                data.percentComplete = Math.round(data.statusPercentages['Complete']);
            }

            if(data.statusPercentages['In Progress']) {
                data.percentInProgress = Math.round(data.statusPercentages['In Progress']);
            }

            if(data.statusPercentages['Not Started']) {
                data.percentNotStarted = Math.round(data.statusPercentages['Not Started']);
            }

            return data;
        },
        defaults: {
            percentComplete: 0,
            percentInProgress: 0,
            percentNotStarted: 0
        }
    });
});