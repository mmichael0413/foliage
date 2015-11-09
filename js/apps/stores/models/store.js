define(function(require){
    var _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Model.extend({
        url: function() {
            return '/api/stores/' + this.get('id');
        },
        updateGeocoding: function(geocode) {
            var options = {
                url: this.url() + '/geocodes',
                type: 'PUT'
            };

            return (this.sync || Backbone.sync).call(this, 'update', geocode, options);
        }
    });
});