define(function(require){
    var BaseCollection = require('singleNickel/collections/base');

    return BaseCollection.extend({
        url: '/api/surveys'
    });
});