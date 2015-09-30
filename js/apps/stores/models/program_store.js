define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Model.extend({
        url: function() {
            return '/api/programs/' + this.get('programUUID') + '/program_stores/' + this.get('id');
        }
    });
});