define(function(require) {
    var $ = require('jquery'),
        ExportView = require('thirdchannel/views/exports/stores/main'),
        StoreView = require('thirdchannel/views/profiles/stores/list');

    return {
        init: function (options) {
            new ExportView(options).render();
            new StoreView().init(options).bootstrapCollection(window.bootstrap);
        }
    };
});