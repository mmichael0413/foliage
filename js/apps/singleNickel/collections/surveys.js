define(function(require){
    var BaseCollection = require('singleNickel/collections/base'),
        Survey = require('singleNickel/models/survey');

    return BaseCollection.extend({
        model: Survey,
        url: '/api/surveys.json'
    });
});