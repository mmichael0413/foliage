define(function (require) {
    require('slick_carousel');
    var context = require('context'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ExpandWrapperView = require('thirdchannel/views/utils/expand_wrapper_view');

    var main = {
        init: function () {
            _.extend(context, window.bootstrap);
            var wrapper = new ExpandWrapperView();

            wrapper.setElement('#site-canvas').render();

            console.log('SALES');
        }
    };
    return main;
});