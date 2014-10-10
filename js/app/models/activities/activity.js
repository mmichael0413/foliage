define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');
    return Backbone.Model.extend({
        initialize: function (attributes, options) {
            if (options.url) {
                this.url = options.url;
            }

            return this;
        }
    });
});