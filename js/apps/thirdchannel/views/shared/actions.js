define(function(require) {
    var context = require('context'),
        Backbone = require('backbone');

    return Backbone.View.extend({
        el: '.actions-container',
        events: {
            'click .action-dropdown button': 'toggleDropdown',
            'click .action-dropdown-content a': 'toggleDropdown',
            'click .action-dropdown-content a.external-event': 'triggerEvent'
        },
        render: function(qs) {
            this.$dropdown = this.$('.action-dropdown-content');
            return this;
        },
        toggleDropdown: function() {
            this.$dropdown.toggleClass('action-dropdown-open');
        },
        triggerEvent: function(e) {
            e.preventDefault();
            context.trigger(this.$(e.target).data('event'));
        }
    });
});
