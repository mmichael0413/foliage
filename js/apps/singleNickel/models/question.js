define(function(require){
    var _ = require('underscore'),
        BaseModel = require('singleNickel/models/base'),
        Choices = require('singleNickel/collections/choices');
        
    return BaseModel.extend({
        type:  "question",
        childType: 'choice',
        childrenCollection: Choices,
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
                "QuestionSummary": {
                    text: "Describing their overall visit",
                    hideSiblings: "#questionMultiple,#questionExplain",
                    showSiblings: "#questionPlaceholder"
                },
                "QuestionDatetime": {
                    text: "Select a date and time",
                    hideSiblings: "#questionMultiple,#questionExplain,#questionPlaceholder"
                },
                "QuestionHidden": {
                    text: "Don't show agent",
                    hideSiblings: "#questionMultiple,#questionExplain,#questionPlaceholder"
                },
                "QuestionDisabled": {
                    text: "Disable Question (ENGINEERING ONLY)",
                    hideSiblings: "#questionMultiple,#questionExplain,#questionPlaceholder"
                }
            },
            explain: {
                "true": {text: "Yes", showSiblings: "#questionPlaceholder"},
                "false": {text: "No", hideSiblings: "#questionPlaceholder"}
            },
            multiple: {
                "true": "Yes",
                "false": "No"
            },
            required: {
                "true": "Yes",
                "false": "No"
            }
        },
        typesWithChildren : ["QuestionMultiChoice", "QuestionSelect"],
        events: {
            'change:type': 'setChildren',
            'change:id': 'updateChildren'
        },
        setup: function(){
            if (this.get('type') === undefined || !_.contains(this.typesWithChildren, this.get('type'))) this.children = undefined;
        },
        setChildren: function(e, data) {
            this.children = _.contains(this.typesWithChildren, data) ? new Choices([], this.options) : undefined;
        },
        createClone: function(opts) {
            var options = {
                url: this.url() + '/clone',
                type: 'POST'
            };

            _.extend(options, opts);

            return (this.sync || Backbone.sync).call(this, null, this, options);
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
        },
        defaults: {
            required: true
        }
    });
});