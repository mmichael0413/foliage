define(function(require) {
    var StoreListView = require('thirdchannel/views/dashboards/special_projects/stores/list'),
        Filter = require('thirdchannel/views/filter/main');

    return {
        init: function () {
            // requires that a bootstrap set of json data be placed on the window
            new StoreListView().renderCollection(window.bootstrap);
            Filter.init();
        }
    };
});