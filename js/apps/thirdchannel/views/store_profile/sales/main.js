define(function (require) {
    var context = require('context'),
        $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        SalesReport = require('thirdchannel/models/stores/sales_report'),
        ReportLayout = require('thirdchannel/views/store_profile/sales/report_layout');

    var main = {
        init: function () {
            _.extend(context, window.bootstrap);

            context.trigger('nav:collapse');

            var model = new SalesReport(window.bootstrap);
            new ReportLayout({el: '.content-holder', model: model}).render();
        }
    };
    return main;
});