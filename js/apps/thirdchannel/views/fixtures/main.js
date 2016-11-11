define(function (require) {
    var _ = require('underscore'),
        Filter = require('thirdchannel/views/filter/main'),
        context = require('context'),
        ReportsDropdown = require('thirdchannel/views/fixtures/reportsDropdown'),
        Summary = require('thirdchannel/views/fixtures/summary'),
        TypesSummary = require('thirdchannel/views/fixtures/typesSummary'),
        DetailsListView = require('thirdchannel/views/fixtures/details/list');
    

    return {
        init: function () {
            _.extend(context, window.bootstrap);

            Filter.init();
            new ReportsDropdown();
        },

        index: function() {
            this.init();

            new Summary();
        },

        types: function () {
            this.init();

            new TypesSummary().fetch();
        },

        detailsList: function () {
            this.init();

            new DetailsListView().bootstrapCollection(window.bootstrap);
        }
    };
});