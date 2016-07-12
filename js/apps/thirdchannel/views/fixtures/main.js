define(function (require) {
    var _ = require('underscore'),
        Filter = require('thirdchannel/views/filter/main'),
        context = require('context'),
        Overview = require('thirdchannel/views/fixtures/overview');
    

    return {
        init: function () {
            _.extend(context, window.bootstrap);
        },

        index: function () {
            this.init();
            Filter.init();
            new Overview().render();
        }
    };
});