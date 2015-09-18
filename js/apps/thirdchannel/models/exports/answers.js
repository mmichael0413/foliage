define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        url: function() {
            return '/programs/' + this.get('programId') + '/exports/survey_answers' + (this.id === undefined ? '' : '/' + this.id);
        }
    });
});