define(function(require){
    var Backbone = require('backbone'),
        BackboneValidator = require('backboneValidator'),
        ChoiceCollection = require('singleNickel/collections/survey/build/choices');
        
    return Backbone.Model.extend({
        type:  "question",
        childType: 'choice',
        templates: {
            edit: "editQuestion",
            show: "showQuestion"
        },
        lookUps: {
            type: {
                "Survey::QuestionInteger": "Number",
                "Survey::QuestionMultiChoice": "Radio Button",
                "Survey::QuestionSelect": "Selection",
                "Survey::QuestionCombo": "Radio Button with Explanation",
                "Survey::QuestionSelectCombo": "Selection with Explanation",
                "Survey::QuestionText": "Text",
                "Survey::QuestionDatetime": "Date Time",
                "Survey::QuestionHidden": "Hidden",
                "Survey::QuestionDisabled": "Disabled"
            },
            multiple: {
                true: "Yes",
                false: "No"
            },
            required: {
                true: "Yes",
                false: "No"
            }
        },
        initialize: function(options) {
            this.children = new ChoiceCollection();
        },
        validation: {
            ask: [{
                required: true
            },{
                minLength: 2,
                message: "The text is too short, please enter at name with at least 2 characters"
            },{
                maxLength: 255,
                message: "The text is too long, please enter at name with at most 255 characters"
            }],
            type: {
                required: true
            },
            required : {
                required: true
            }
        }
    });
});