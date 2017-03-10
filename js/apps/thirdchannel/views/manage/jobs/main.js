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
        }
    };
});