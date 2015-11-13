define(function (require) {
    var context = require('context'),
        $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ReportLayout = require('thirdchannel/views/store_profile/sales/report_layout');

    var main = {
        init: function () {
            _.extend(context, window.bootstrap);

            context.trigger('nav:toggle');

            var model = new Backbone.Model(window.bootstrap);
            new ReportLayout({el: '.content-holder', model: model}).render();
        }
    };
    return main;
});