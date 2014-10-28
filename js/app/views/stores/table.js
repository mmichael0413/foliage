define(function(require) {
    var FilterableTableView = require('app/views/shared/filterable_table'),
        Members = require('app/collections/checkins/checkin_stores');
    
    return FilterableTableView.extend({
        collectionClass: Members,
        template: 'stores/table_rows'
    });
});