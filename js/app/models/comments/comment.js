define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');
        
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