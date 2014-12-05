define(function(require) {
    var FilterableTableView = require('thirdchannel/views/shared/filterable_table'),
        Members = require('thirdchannel/collections/checkins/checkin_stores');

    return FilterableTableView.extend({
        el: ".section",
        bodySelector: '.table',
        collectionClass: Members,
        template: 'checkins/store'
    });
});