define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.View.extend({
        el: '.content',
        events: {
            'click .close-status-bar a' : 'closeAlert'
        },
        closeAlert: function(e) {
            e.preventDefault();
            e.stopPropagation();

            self.$('.status-bar').addClass('hide-status-bar');
        }
    });
});