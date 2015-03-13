define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone'),
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
                "Survey::QuestionInteger": {
                    text: "Input a number",
                    hideSiblings: "#questionMultiple,#questionExplain,#questionPlaceholder"
                },
                "Survey::QuestionMultiChoice": {
                    text: "Click a radio button",
                    hideSiblings: "#questionMultiple",
                    showSiblings: "#questionExplain"
                },
                "Survey::QuestionSelect": {
                    text: "Select from a drop down",
                    showSiblings: "#questionMultiple,#questionExplain"
                },
                "Survey::QuestionText": {
                    text: "Fill in some text",
                    hideSiblings: "#questionMultiple,#questionExplain,#questionPlaceholder"
                },
                "Survey::QuestionDatetime": {
                    text: "Select a date and time",
                    hideSiblings: "#questionMultiple,#questionExplain,#questionPlaceholder"
                },
                "Survey::QuestionHidden": {
                    text: "Don't show agent",
                    hideSiblings: "#questionMultiple,#questionExplain,#questionPlaceholder"
                }
            },
            explain: {
                true: {text: "Yes", showSiblings: "#questionPlaceholder"},
                false: {text: "No", hideSiblings: "#questionPlaceholder"}
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
        typesWithChildren : ["Survey::QuestionMultiChoice", "Survey::QuestionSelect"],
        initialize: function(options) {
            this.bind('change:type', this.setChildren);
        },
        setChildren: function(e, data) {
            this.children = _.contains(this.typesWithChildren, data) ? new ChoiceCollection() : undefined;
        },
        optionalValidation: function(value) {
            return (value !== undefined) && (value == '') ? 'Required' : true;
        },
        validation: {
            ask: [{
                required: true,
                message: "Required"
            },{
                minLength: 2,
                message: "The text is too short, please enter at name with at least 2 characters"
            },{
                maxLength: 255,
                message: "The text is too long, please enter at name with at most 255 characters"
            }],
            type: {
                required: true,
                message: "Required"
            },
            required : {
                required: true,
                message: "Required"
            },
            multiple : {
                fn: function(value) {return this.optionalValidation(value);}
            },
            explain : {
                fn: function(value) {return this.optionalValidation(value);}
            },
            placeholder : {
                maxLength: 255,
                fn: function(value) {return this.optionalValidation(value);}
            }
        }
    });
});