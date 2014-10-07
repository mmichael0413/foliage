define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
    return Backbone.Model.extend({
        initialize: function (attributes, options) {
            if (options.url) {
                this.url = options.url;
            }

            return this;
        }
    });
});