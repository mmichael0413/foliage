define(function(require) {
    var FilterableTableView = require('app/views/shared/filterable_table'),
        Members = require('app/collections/teams/members');

    return FilterableTableView.extend({

        collectionClass: Members,
        template: 'teams_table_rows'

    });
});