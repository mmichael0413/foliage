define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Choices = require('singleNickel/collections/choices');
        
    return Backbone.Model.extend({
        type:  "question",
        childType: 'choice',
        templates: {
            edit: "editQuestion",
            show: "showQuestion"
        },
        lookUps: {
            type: {
                "QuestionInteger": {
                    text: "Input a number",
                    hideSiblings: "#questionMultiple,#questionExplain,#questionPlaceholder"
                },
                "QuestionMultiChoice": {
                    text: "Click a radio button",
                    hideSiblings: "#questionMultiple",
                    showSiblings: "#questionExplain"
                },
                "QuestionSelect": {
                    text: "Select from a drop down",
                    showSiblings: "#questionMultiple,#questionExplain"
                },
                "QuestionText": {
                    text: "Fill in some text",
                    hideSiblings: "#questionMultiple,#questionExplain,#questionPlaceholder"
                },
                "QuestionDatetime": {
                    text: "Select a date and time",
                    hideSiblings: "#questionMultiple,#questionExplain,#questionPlaceholder"
                },
                "QuestionHidden": {
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
        typesWithChildren : ["QuestionMultiChoice", "QuestionSelect"],
        initialize: function(params) {
            this.options = _.extend({}, params.options, {questionId: this.id});
            this.attributes = params.attributes;
            this.bind('change:type', this.setChildren);
            this.bind('change:id', this.updateChildren);
        },
        setChildren: function(e, data) {
            this.children = _.contains(this.typesWithChildren, data) ? new Choices([], this.options) : undefined;
        },
        updateChildren: function() {
            this.options = _.extend(this.options, {questionId: this.id});
            if (this.children !== undefined) {
                this.children.updateOptions(this.options);
            }
        },
        childParams: function() {
            return {
                options: this.options,
                attributes: {
                    idx: this.children.models.length
                }
            };
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