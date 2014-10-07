define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
    return Backbone.Model.extend({
        idAttribute: 'comment_id',
        initialize: function (attributes, options) {
            this.url = options.url;
        },
        validate: function (attrs, options) {
            if (attrs.comment === '') {
                return 'error';
            }
        }
    });
});