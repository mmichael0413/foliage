define(function(require){
    var Backbone = require('backbone'),
        SectionModel = require('singleNickel/models/section');

    return Backbone.Collection.extend({
        model: SectionModel,
        initialize: function(options){
            this.updateOptions(options);
        },
        updateOptions: function(options) {
            this.options = options;
        },
        url: function() {
            return '/api/surveys/'+ this.options.surveyId + '/sections/';
        }
    });
});