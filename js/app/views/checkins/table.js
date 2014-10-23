define(function(require) {
    var FilterableTableView = require('app/views/shared/filterableTable'),
        Members = require('app/collections/checkins/checkin_stores');

    return FilterableTableView.extend({
        collectionClass: Members,
        template: 'checkins/store'
    });
});