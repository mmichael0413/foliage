define(function(require) {
    var FilterableTableView = require('app/views/shared/filterableTable'),
        Members = require('app/collections/teams/members');
    
    return FilterableTableView.extend({
        collectionClass: Members,
        rowTemplate: 'stores/table_row',
    });
});