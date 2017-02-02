define(function (require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Filter = require('thirdchannel/views/filter/main'),
        context = require('context'),
        Summary = require('thirdchannel/models/fixture_tracking/summary'),
        Problems = require('thirdchannel/collections/fixture_tracking/problems'),
        ReportsDropdown = require('thirdchannel/views/fixtures/reportsDropdown'),
        SummaryOverview = require('thirdchannel/views/fixtures/summary'),
        ProblemsSummary = require('thirdchannel/views/fixtures/problemsSummary'),
        ProblemsList = require('thirdchannel/views/fixtures/problems/list'),
        TypesSummary = require('thirdchannel/views/fixtures/typesSummary'),
        DetailsListView = require('thirdchannel/views/fixtures/details/list');

    return _.extend(Backbone.Events, {
        init: function () {
            _.extend(context, window.bootstrap);

            Filter.init();
            new ReportsDropdown();
        },

        initSummaryOverview: function() {
            this.listenTo(context, 'filter:query', this.fetchSummary);

            this.fixtureSummary = new Summary({programId: context.programId});

            new SummaryOverview({model: this.fixtureSummary});

            this.fetchSummary();
        },

        fetchSummary: function() {
            var options = {};

            // eh...
            var search = window.location.search;
            if(search.length > 0) {
                options.data = search.substring(1, search.length);
            }

            this.fixtureSummary.fetch(options);
        },

        index: function() {
            this.init();
            this.initSummaryOverview();

            var problems = new Problems([], {programId: context.programId});

            new ProblemsSummary({collection: problems});
        },

        types: function () {
            this.init();
            this.initSummaryOverview();

            new TypesSummary().fetch();
        },

        detailsList: function () {
            this.init();

            new DetailsListView().bootstrapCollection(window.bootstrap);
        },

        problemsList: function() {
            this.init();

            var problems = new Problems(window.bootstrap, {programId: context.programId, parse: true});
            new ProblemsList({collection: problems});
        }
    });
});