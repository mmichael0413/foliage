define(function(require){
    var Backbone = require('backbone'),
        Questions = require('singleNickel/collections/questions');

    return Backbone.Model.extend({
        type:  "section",
        childType: 'question',
        templates: {
            edit: "editSection",
            show: "showSection"
        },
        initialize: function(params) {
            this.options = _.extend({}, params.options, {sectionId: this.id});
            this.attributes = params.attributes;
            this.children = new Questions([], this.options);
            this.bind('change:id', this.updateChildren);
        },
        updateChildren: function() {
            this.options = _.extend(this.options, {sectionId: this.id});
            this.children.updateOptions(this.options);
        },
        childParams: function() {
            return {
                options: this.options,
                attributes: {
                    idx: this.children.models.length
                }
            };
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