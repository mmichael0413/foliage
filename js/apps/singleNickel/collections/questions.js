define(function(require){
    var Backbone = require('backbone'),
        QuestionModel = require('singleNickel/models/question');

    return Backbone.Collection.extend({
        model: QuestionModel,
        initialize: function(models, options){
            this.reset(models);
            this.options = options;
        },
        url: function() {
            return '/api/surveys/'+ this.options.surveyId + '/sections/' + this.options.sectionId + '/questions/';
        }
    });
});