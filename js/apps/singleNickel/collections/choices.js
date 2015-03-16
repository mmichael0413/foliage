define(function(require){
    var Backbone = require('backbone'),
        ChoiceModel = require('singleNickel/models/choice');

    return Backbone.Collection.extend({
        model: ChoiceModel,
        initialize: function(options){
            this.updateOptions(options);
        },
        updateOptions: function(options) {
            this.options = options;
        },
        url: function() {
            return '/api/surveys/'+ this.options.surveyId + '/sections/' + this.options.sectionId + '/questions/' + this.options.questionId + '/choices/';
        }
    });
});