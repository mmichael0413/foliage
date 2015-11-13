define(function (require) {
    require('slick_carousel');
    var context = require('context'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ExpandWrapperView = require('thirdchannel/views/utils/expand_wrapper_view'),
        ReportLayout = require('thirdchannel/views/store_profile/sales/report_layout');

    var main = {
        init: function () {
            _.extend(context, window.bootstrap);
            var wrapper = new ExpandWrapperView();

            wrapper.setElement('#site-canvas').render();

            new ReportLayout({model: window.bootstrap}).render();
        }
    };
    return main;
});