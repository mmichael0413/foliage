define(function(require){
    var BaseCollection = require('singleNickel/collections/base'),
        SectionModel = require('singleNickel/models/section');

    return BaseCollection.extend({
        model: SectionModel,
        comparator: 'idx',
        url: function() {
            return '/api/surveys/'+ this.options.surveyId + '/sections.json';
        }
    });
});