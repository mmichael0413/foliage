define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        BaseModel = require('singleNickel/models/base'),
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
                special_project: "Special Project",
                demo: 'Demo',
                event: 'Event',
                'Merchandising': 'Merchandising',
                'Consumer Engagement & Selling': 'Consumer Engagement & Selling',
                'Associate Education': 'Associate Education',
                'Inventory Management': 'Inventory Management',
                'Competitive Profiling': 'Competitive Profiling',
                'Store Intel': "Store Intel (New)"
            },
            show_images: {
                "true": "Yes",
                "false": "No"
            },
            require_images: {
                "true": "Yes",
                "false": "No"
            },
            show_additional_images: {
                "true": "Yes",
                "false": "No"
            },
            require_additional_images: {
                "true": "Yes",
                "false": "No"
            }
        },
        events: {
            'change:id': "updateChildren"
        },
        setup: function(options) {
            this.options.survey = this;
            this.customers = context.customers;
        },
        url: function() {
            return '/api/surveys' + (this.isNew() ? '' : '/' + this.id);
        },
        redirect: function() {
            return  '/surveys/' + this.id + '/edit';
        },
        toggleLock: function(opts) {
            var options = {
                    url: this.url() + '/lock',
                    type: 'PUT'
                };

            _.extend(options, opts);

            return (this.sync || Backbone.sync).call(this, null, this, options);
        },
        cloneSurvey: function(opts, customer) {
            var options = {
                url: this.url() + '/clone' + (customer ? '?customer_uuid=' + customer : ''),
                type: 'POST'
            };

            _.extend(options, opts);

            return (this.sync || Backbone.sync).call(this, null, this, options);
        },
        surveyType: function() {
          return this.lookUps.survey_type[this.get('survey_type')];
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
            require_images: {
                required: true,
                message: "Required"
            },
            show_images: {
                required: true,
                message: "Required"
            },
            require_additional_images: {
                required: true,
                message: "Required"
            },
            show_additional_images: {
                required: true,
                message: "Required"
            },
            additional_images_description: {
                required: true,
                message: "Required"
            },
            before_images_description: {
                required: true,
                message: "Required"
            },
            after_images_description: {
                required: true,
                message: "Required"
            }
        },
        defaults: {
            "locked": false
        }
    });
});