define(function(require) {
    var $ = require('jquery'),
        Chosen = require('chosen');

    return {
        init: function (options) {
            $('select').chosen({disable_search: true, width: "100%"});
        }
    };
});