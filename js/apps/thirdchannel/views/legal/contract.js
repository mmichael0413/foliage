define(function(require) {
    var Backbone = require('backbone');

    return Backbone.View.extend({
        el: '#agent-agreement',

        events: {
            'click .accept': 'disableLink'
        },

        render: function() {
            return this;
        },

        disableLink: function(e) {
            this.$(e.target).prepend('<i class="ic_processing ic-spin"></i> ').addClass('not-active');
        }
    });
});