define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone'),
        BackboneValidator = require('backboneValidator');

    return Backbone.Model.extend({
        url: function() {
            var base = '/api/accounts';
            if(this.get('id')) {
                base += '/' + this.get('id');
            }
            return base;
        },
        validation: {
            name: {
                required: true,
                blank: false,
                message: 'is required'
            }
        }
    });
});