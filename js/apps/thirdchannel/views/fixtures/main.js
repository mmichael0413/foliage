define(function (require) {
    var _ = require('underscore'),
        Filter = require('thirdchannel/views/filter/main'),
        context = require('context'),
        Stores = require('thirdchannel/views/fixtures/stores'),
        Problems = require('thirdchannel/views/fixtures/problems'),
        Overview = require('thirdchannel/views/fixtures/overview');
    

    return {
        init: function () {
            _.extend(context, window.bootstrap);
        },

        index: function () {
            this.init();
            Filter.init();
            new Overview().render();
        },

        stores: function () {
            this.init();
            //Filter.init();
            new Stores().render();
        },

        problems: function () {
            this.init();
            new Problems().render();
        }
    };
});