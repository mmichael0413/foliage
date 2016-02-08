define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        DataClipView = require('thirdchannel/views/exports/data_clips/data_clip');

    return Backbone.View.extend({
        el: '#data_clips',

        render: function() {
            this.$('form').each(function(index, elem){
                new DataClipView(elem);
            });
        }
    });
});