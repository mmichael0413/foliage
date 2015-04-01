define(function(require){

    var $ = require('jquery'),
        _ = require('underscore'),
        context = require('context'),
        Backbone = require('backbone'),
        BackboneValidatorPatch = require('backboneValidatorPatch'),
        Router = require('singleNickel/routers/main');

    var initialize = function() {
        Router.initialize();

        $(document).on('click', 'a:not([data-bypass])', function (evt) {
            var href = $(this).attr('href'),
                protocol = this.protocol + '//';

            if (href.slice(protocol.length) !== protocol) {
                evt.preventDefault();
                context.router.navigate(href, true);
            }
        });
    };

    return {
        initialize: initialize
    };
});