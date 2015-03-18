define(function(require){
    var BaseModel = require('singleNickel/models/base'),
        Sections = require('singleNickel/collections/sections'),
        Customers = require('singleNickel/collections/customers');

    return BaseModel.extend({
        type:  "survey",
        childType: 'section',
        childrenCollection: Sections,
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
        events: {
            'change:id': "updateChildrenAndUrl"
        },
        setup: function(options) {
            this.getCustomers();
        },
        getCustomers: function(){
            this.customers = new Customers();
            this.customers.fetch({async:false}).fail(function () {
                alert('An error has occurred.  Please contact Andrew!');
            });
        },
        updateChildrenAndUrl: function() {
            this.updateChildren();
            Backbone.history.navigate('/surveys/' + this.id + '/edit');
        },
        url: function() {
            return '/api/surveys/' + (this.id || '');
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