define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Model.extend({
        defaults: {
            type: 'link',
            className: '',
            bypass: false
        }
    });
});