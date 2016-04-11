define(function (require) {

    var context = require('context'),
        _ = require('underscore'),
        RoiView = require('thirdchannel/views/exports/roi/roi');

    var main = {
        init: function () {
            _.extend(context, window.bootstrap);
        },

        roi: function () {
            this.init();
            new RoiView().render();
        }
    };

    return main;

});