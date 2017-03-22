define(function (require) {
    var Backbone = require('backbone'),
        context = require('context');

    var TopicSurveysStore = function () {
        return new (Backbone.Collection.extend({
            url: function () {
                return context.links.topicSurveys;
            }
        }))();
    };

    return TopicSurveysStore();
});