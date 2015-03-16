define(function(require){
    var Backbone = require('backbone'),
        Sections = require('singleNickel/collections/sections'),
        Customers = require('singleNickel/collections/customers');

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
            this.options = _.extend({}, options, {surveyId: this.id});
            this.children = new Sections([], this.options);
            this.bind('change:id', this.updateChildren);
            this.getCustomers();
        },
        updateChildren: function() {
            this.options = _.extend(this.options, {surveyId: this.id});
            this.children.updateOptions(this.options);
        },
        getCustomers: function(){
            this.customers = new Customers();
            this.customers.fetch({async:false}).fail(function () {
                alert('An error has occurred.  Please contact Andrew!');
            });
        },
        url: function() {
            return '/api/surveys/' + (this.id || '');
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
            }],
            survey_type: {
                required: true,
                message: "Required"
            },
            customer: {
                required: true,
                message: "Required"
            }
        }
    });
});