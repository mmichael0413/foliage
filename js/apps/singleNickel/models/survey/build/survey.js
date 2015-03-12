define(function(require){
    var Backbone = require('backbone'),
        BackboneValidation = require('backboneValidation'),
        SectionCollection = require('singleNickel/collections/survey/build/sections');

    return Backbone.Model.extend({
        type:  "survey",
        childType: 'section',
        templates: {
            edit: "editSurvey",
            show: "showSurvey"
        },
        lookUps: {
            survey_type: {
                store_visit: "Checkin",
                store_profile: "Store Intel",
                special_project: "Special Project"
            }
        },
        initialize: function(options) {
            this.children = new SectionCollection();
        },
        validation: {
            title: [{
                required: true
            },{
                minLength: 2,
                msg: "The name is too short, please enter at name with at least 2 characters"
            },{
                maxLength: 255,
                msg: "The name is too long, please enter at name with at most 255 characters"
            }],
            survey_type: {
                required: true
            }
        }
    });
});