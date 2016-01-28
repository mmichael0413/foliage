define(function(require){
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        initialize: function(options) {
            this.baseUrl = options.baseUrl;
        },
        url: function() {
            return this.baseUrl + '/reindex';
        }
    });
});