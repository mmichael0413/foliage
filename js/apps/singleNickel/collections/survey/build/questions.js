define(function(require){
    var Backbone = require('backbone'),
        QuestionModel = require('singleNickel/models/survey/build/question');

    return Backbone.Collection.extend({
        model: QuestionModel,
        initialize: function() {
        }
    });
});