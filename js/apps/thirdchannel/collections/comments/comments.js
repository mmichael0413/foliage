define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Comment = require('thirdchannel/models/comments/comment');

    return Backbone.Collection.extend({
        initialize: function (models, options) {
            this.url = options.url;
            this.currentUserId = options.currentUserId;
            this.highlightWords = options.highlightWords;
        },
        comparator: function(m) {
            return Date.parse(m.get('posted_at'));
        },
        model: Comment
    });
});