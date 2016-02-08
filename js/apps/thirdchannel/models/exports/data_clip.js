define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        url: function() {
            return '/admin/data_clips' + (this.id === undefined ? '' : '/' + this.id) + (this.get('data_clip_id') === undefined ? '' : '/?data_clip_id=' + this.get('data_clip_id'));
        }
    });
});