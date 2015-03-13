define(function(require){
    var Backbone = require('backbone'),
        QuestionCollection = require('singleNickel/collections/survey/build/questions');

    return Backbone.Model.extend({
        type:  "section",
        childType: 'question',
        templates: {
            edit: "editSection",
            show: "showSection"
        },
        initialize: function(options) {
            this.children = new QuestionCollection();
        },
        validation: {
            title: [{
                required: true,
                message: "Required"
            },{
                minLength: 2,
                message: "The name is too short, please enter at name with at least 2 characters"
            },{
                maxLength: 255,
                message: "The name is too long, please enter at name with at most 255 characters"
            }]
        }
    });
});