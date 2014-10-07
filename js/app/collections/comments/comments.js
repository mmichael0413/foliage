define([
    'jquery',
    'underscore',
    'backbone',
    'app/models/comments/comment'
], function($, _, Backbone, Comment){
    return Backbone.Collection.extend({
        initialize: function (models, options) {
            this.url = options.url;
        },
        comparator: function(m) {
            return Date.parse(m.get('posted_at'));
        },
        model: Comment
    });
});