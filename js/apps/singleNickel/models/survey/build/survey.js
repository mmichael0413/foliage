define(function(require){
    var Backbone = require('backbone'),
        BackboneValidator = require('backboneValidator'),
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
                required: true,
                maxLength: 255
            }],
            survey_type: {
                required: true
            }
        }
    });
});