define(function(require) {
    var $ = require('jquery'),
        context = require('context'),
        Stores = require('thirdchannel/collections/stores'),
        JobRequest = require('thirdchannel/models/manage/job'),
        CreateView = require('thirdchannel/views/manage/jobs/create');

    var initJobRequestFromSessionStore = function(jobRequest) {
        var jobRequestSessionData = window.sessionStorage.getItem('job-request');
        if(jobRequestSessionData) {
            jobRequestSessionData = JSON.parse(jobRequestSessionData);
            jobRequest.set(jobRequestSessionData);
            window.sessionStorage.removeItem('job-request');
        }
    };

    return {
        create: function() {
            var selectedStoreIds = window.sessionStorage.getItem('selected-stores');
            if(selectedStoreIds) {
                selectedStoreIds = JSON.parse(selectedStoreIds);
            } else {
                selectedStoreIds = [];
            }

            var jobRequest = new JobRequest();

            initJobRequestFromSessionStore(jobRequest);

            var stores = new Stores();

            var createView = new CreateView({
                stores: stores,
                surveys: context.surveys,
                surveyTopics: context.survey_topics,
                timezones: context.timezones,
                model: jobRequest
            });

            createView.render();

            stores.fetch({reset: true, data: $.param({store_ids: selectedStoreIds, per: selectedStoreIds.length})});
        },

        update: function(id) {
            var jobRequest = new JobRequest(context.job_request);

            initJobRequestFromSessionStore(jobRequest);

            var selectedStoreIds = window.sessionStorage.getItem('selected-stores');
            if(selectedStoreIds) {
                selectedStoreIds = JSON.parse(selectedStoreIds);
            } else {
                // otherwise get the list from the model, or if that doesn't exist default to empty array
                selectedStoreIds = jobRequest.get('program_store_uuids') || [];
            }

            // Set the selected stores in case the users needs to change them during the create/update processes
            window.sessionStorage.setItem('selected-stores', JSON.stringify(selectedStoreIds));

            var stores = new Stores();

            var createView = new CreateView({
                stores: stores,
                surveys: context.surveys,
                surveyTopics: context.survey_topics,
                timezones: context.timezones,
                model: jobRequest
            });

            createView.render();

            stores.fetch({reset: true, data: $.param({store_ids: selectedStoreIds, per: selectedStoreIds.length})});
        }
    };
});