define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');
    return Backbone.Model.extend({
        initialize: function (attributes, options) {
            this.attributes = attributes.activities;
            this.currentUserId = attributes.current_user_id;
            this.highlightWords = attributes.highlight_words;
            if (options.url) {
                this.url = options.url;
            }

            return this;
        }
    });
});