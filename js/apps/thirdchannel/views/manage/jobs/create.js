define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        Chosen = require('chosen'),
        TimePicker = require('timepicker'),
        DateTimePicker = require('dateTimePicker'),
        context = require('context'),
        DateRange = require('thirdchannel/models/manage/dateRange'),
        StoreItem = require('thirdchannel/views/manage/jobs/store_item'),
        DateRangeView = require('thirdchannel/views/manage/jobs/dateRange');

    var JobCreate = Backbone.View.extend({
        el: '.job-request-container',

        events: {
            'click .recommend_start_time': 'toggleRecommendedTimeFields',
            'click .add-date-range': 'addDateRange',
            'click .submit-job-request': 'handleSubmit',
            'click .cancel-job-request': 'handleCancel'
        },

        template: HandlebarsTemplates['thirdchannel/manage/jobs/create'],

        initialize: function(options) {
            _.bindAll(this, 'renderRanges', 'renderRange');

            this.stores = options.stores;
            this.surveys = options.surveys;
            this.surveyTopics = options.surveyTopics;
            this.timezones = options.timezones;

            var initialRange = new DateRange();
            this.ranges = new Backbone.Collection([initialRange]);

            this.listenTo(this.stores, 'reset', this.renderStores);
        },

        render: function() {
            var data = {
                surveys: this.surveys,
                surveyTopics: this.surveyTopics,
                timezones: this.timezones
            };
            this.$el.html(this.template(data));
            this.$('.survey_uuid, .duration, .survey_topic_uuids').chosen({disable_search: true, width: "100%"});
            this.$('.timezone').chosen({width: "100%"});
            this.$('.start_time').timepicker();
            this.renderRanges();
            return this;
        },

        renderStores: function() {
            var $storeList = this.$('.store-list');
            this.stores.each(function(store) {
                var storeItem = new StoreItem({model: store});
                $storeList.append(storeItem.render().el);
            }.bind(this));
        },

        renderRanges: function() {
            this.ranges.each(this.renderRange.bind(this));
        },

        renderRange: function(range) {
            var view = new DateRangeView({model: range});
            this.$('.date-range-list').append(view.render().el);
        },

        toggleRecommendedTimeFields: function(e) {
            if(e.target.checked) {
                this.$('.start-time-container').removeClass('hide');
            } else {
                this.$('.start-time-container').addClass('hide');
                this.$('.start_time').val("");
                this.$('.timezone').val("");
            }
        },

        addDateRange: function(e) {
            e.preventDefault();

            var range = new DateRange();
            this.ranges.add(range);
            this.renderRange(range);
        },

        handleSubmit: function(e) {
            e.preventDefault();

            // Remove all errors first
            $('.job-request-form .error').removeClass('error');

            var programStoreIds = this.stores.map(function(s) { return s.get('uuid'); });

            var ranges = this.ranges
                .filter(function(r) {
                    var start = r.get('start'),
                        end = r.get('end');

                    return start && start !== "" && end && end !== "";
                })
                .map(function(r) {
                    return {
                        start: r.get('start'),
                        end: r.get('end')
                    };
                });

            var data = {
                survey_uuid: this.$('.survey_uuid').val(),
                duration: this.$('.duration').val(),
                recommended_start_time: this.$('.recommend_start_time').is(':checked'),
                start_time: this.$('.start_time').val(),
                timezone: this.$('.timezone').val(),
                survey_topic_uuids: this.$('.survey_topic_uuids').val(),
                notes: this.$('.notes').val(),
                program_store_uuids: programStoreIds,
                ranges: ranges
            };

            var errors = false;
            if(!data.survey_uuid || data.survey_uuid === "") {
                errors = true;
                this.$('.survey_uuid').parent().addClass('error');
            }

            if(!data.duration || data.duration === "") {
                errors = true;
                this.$('.duration').parent().addClass('error');
            }

            if(data.recommended_start_time && (!data.start_time || data.start_time === "")) {
                errors = true;
                this.$('.start_time').parent().addClass('error');
            }

            if(!data.survey_topic_uuids || data.survey_topic_uuids.length === 0) {
                errors = true;
                this.$('.survey_topic_uuids').parent().addClass('error');
            }

            if(!data.program_store_uuids || data.program_store_uuids.length === 0) {
                errors = true;
                this.$('.store-list-container').addClass('error');
            }

            if(!data.ranges || data.ranges.length === 0) {
                errors = true;
                this.$('.date-range-container').addClass('error');
            }

            if(!errors) {
                console.log('submit!');
                /*
                this.model
                    .save(data)
                    .then(function(response) {
                        window.sessionStorage.removeItem('selected-stores');
                        // redirect to stores page
                    })
                    .fail(function(model) {
                        // alert that there was an error
                    });
                */
            }
        },

        handleCancel: function(e) {
            e.preventDefault();
            if(confirm("Are you sure you want to cancel request?")) {
                window.sessionStorage.removeItem('selected-stores');
                window.location = '/programs/' + context.programId + '/stores';
            }
        }
    });

    return JobCreate;
});