define(function(require){
    var Backbone = require('backbone'),
        SectionModel = require('singleNickel/models/survey/build/section');

    return Backbone.Collection.extend({
        model: SectionModel,
        initialize: function() {
        }
    });
});