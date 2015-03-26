define(function(require){
    var BaseCollection = require('singleNickel/collections/base'),
        ChoiceModel = require('singleNickel/models/choice');

    return BaseCollection.extend({
        model: ChoiceModel,
        comparator: 'idx',
        url: function() {
            return '/api/surveys/'+ this.options.surveyId + '/sections/' + this.options.sectionId + '/questions/' + this.options.questionId + '/choices.json';
        }
    });
});