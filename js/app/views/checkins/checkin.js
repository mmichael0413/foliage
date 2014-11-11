define(function(require) {
    var TableView = require('app/views/checkins/table'),
        PaginatorView = require('app/views/utils/paginator'),
        Filter = require('app/views/filter/main');

    return {
        init: function () {
            // requires that a bootstrap set of json data be placed on the window
            new TableView().collection.reset(window.bootstrap);
            new PaginatorView({url: 'checkins/pagination'});
            Filter.init();
        }
    };
});