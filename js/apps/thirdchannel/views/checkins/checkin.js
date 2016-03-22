define(function(require) {
    var TableView = require('thirdchannel/views/checkins/table'),
        PaginatorView = require('thirdchannel/views/utils/paginator'),
        Filter = require('thirdchannel/views/filter/main');

    return {
        init: function () {
            var tableView = new TableView();
            tableView.renderCollection(window.bootstrap);
            Filter.init();
        }
    };
});
