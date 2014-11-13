define(function(require) {
    var TableView = require('thirdchannel/views/checkins/table'),
        PaginatorView = require('thirdchannel/views/utils/paginator'),
        Filter = require('thirdchannel/views/filter/main');

    return {
        init: function () {
            // requires that a bootstrap set of json data be placed on the window
            new TableView().collection.reset(window.bootstrap);
            new PaginatorView({url: 'checkins/pagination'});
            Filter.init();
        }
    };
});