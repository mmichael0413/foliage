define(function(require){
    var Backbone = require('backbone'),
        ChoiceModel = require('singleNickel/models/survey/build/choice');

    return Backbone.Collection.extend({
        model: ChoiceModel,
        initialize: function() {
        }
    });
});