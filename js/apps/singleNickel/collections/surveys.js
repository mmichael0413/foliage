define(function(require){
    var BaseCollection = require('singleNickel/collections/base'),
        Survey = require('singleNickel/models/survey');

    return BaseCollection.extend({
        model: Survey,
        url: function() {
            return '/api/surveys?customer='+ this.options.customer;
        }
    });
});