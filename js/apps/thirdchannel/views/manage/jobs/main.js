define(function(require) {
    var $ = require('jquery'),
        context = require('context'),
        Stores = require('thirdchannel/collections/stores'),
        JobRequest = require('thirdchannel/models/manage/job'),
        CreateView = require('thirdchannel/views/manage/jobs/create');

    return {
        create: function() {
            var selectedStoreIds = window.sessionStorage.getItem('selected-stores');
            if(selectedStoreIds) {
                selectedStoreIds = JSON.parse(selectedStoreIds);
            } else {
                selectedStoreIds = [];
            }

            // TODO restore job request from sessionStorage if there and clear it afterward (this is just to bridge the gap between store page and the job request form)

            var stores = new Stores();

            var createView = new CreateView({
                stores: stores,
                surveys: context.surveys,
                surveyTopics: context.survey_topics,
                timezones: context.timezones,
                model: new JobRequest()
            });

            createView.render();

            stores.fetch({reset: true, data: $.param({store_ids: selectedStoreIds, per: selectedStoreIds.length})});
        },

        update: function(id) {
            var jobRequest = new JobRequest(context.job_request);

            // TODO Retrieve selected stores, merge lists between what's on the model and what's in sessionStorage (since things could get added)

            var selectedStoreIds = jobRequest.get('program_store_uuids');

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