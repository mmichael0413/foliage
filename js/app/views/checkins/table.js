define(function(require) {
    var FilterableTableView = require('app/views/shared/filterable_table'),
        Members = require('app/collections/checkins/checkin_stores');

    return FilterableTableView.extend({
        el: ".section",
        bodySelector: '.table',
        collectionClass: Members,
        template: 'checkins/store'
    });
});