define(function(require){

    var $ = require('jquery'),
        Backbone = require('backbone'),
        sb = require('slidebars');

    return Backbone.View.extend({
        initialize: function () {
            $.slidebars();
        }
    });
});