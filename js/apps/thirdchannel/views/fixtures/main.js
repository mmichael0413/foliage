define(function (require) {
    var _ = require('underscore'),
        Filter = require('thirdchannel/views/filter/main'),
        context = require('context'),
        ReportsDropdown = require('thirdchannel/views/fixtures/reportsDropdown'),
        Overview = require('thirdchannel/views/fixtures/overview');
    

    return {
        init: function () {
            _.extend(context, window.bootstrap);
        },

        index: function () {
            this.init();
            Filter.init();
            new ReportsDropdown();
            new Overview().fetch();
        }
    };
});