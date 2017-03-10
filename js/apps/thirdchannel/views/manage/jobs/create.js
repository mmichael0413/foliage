define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        Chosen = require('chosen'),
        TimePicker = require('timepicker'),
        DateTimePicker = require('dateTimePicker'),
        SerializeObject = require('serializeObject')
        context = require('context'),
        StoreItem = require('thirdchannel/views/manage/jobs/store_item');

    var dtPickerOptions = {
        timepicker: false,
        format: 'Y-m-d',
        closeOnDateSelect: true,
        scrollInput: false
    };

    var JobCreate = Backbone.View.extend({
        el: '.job-request-container',

        events: {
            'click .recommend_start_time': 'toggleRecommendedTimeFields',
            'click .submit-job-request': 'handleSubmit',
            'click .cancel-job-request': 'handleCancel'
        },

        template: HandlebarsTemplates['thirdchannel/manage/jobs/create'],

        initialize: function(options) {
            this.stores = options.stores;
            this.surveys = options.surveys;
            this.surveyTopics = options.surveyTopics;
            this.timezones = options.timezones;

            var initialRange = new Backbone.Model();
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
            this.$('select').chosen({width: "100%"});
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
            console.log(range);
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

        handleSubmit: function(e) {
            e.preventDefault();

            var programStoreIds = this.stores.map(function(s) { return s.get('uuid'); });

            // TODO map ranges and add to model data
            var ranges = this.ranges.map(function(r) {
                return {
                    start: r.get('start'),
                    end: r.get('end')
                };
            });

            var data = {
                survey_uuid: this.$('.survey_uuid').val(),
                duration: this.$('.duration').val(),
                recommended_start_time: this.$('.recommend_start_time').val(),
                start_time: this.$('.start_time').val(),
                timezone: this.$('.timezone').val(),
                survey_topic_uuids: this.$('.survey_topic_uuids').val(),
                notes: this.$('.notes').val(),
                program_store_uuids: programStoreIds,
                ranges: ranges
            };

            console.log()

            // validate form
            // Required:
            // * surveyUuid (aka visit type)
            // * duration
            // * if recommended start time
            //   * startTime
            // * surveyTopicUuids (at least one)
            // * programStoreUuids (at least one)
            // * ranges (at least one, also need to ensure that they make sense...)

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