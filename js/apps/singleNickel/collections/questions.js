define(function(require){
    var BaseCollection = require('singleNickel/collections/base'),
        QuestionModel = require('singleNickel/models/question');

    return BaseCollection.extend({
        model: QuestionModel,
        url: function() {
            return '/api/surveys/'+ this.options.surveyId + '/sections/' + this.options.sectionId + '/questions/';
        }
    });
});