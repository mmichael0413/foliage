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
        initialize: function () {
            _.bindAll(this, 'toggleDropdown');
        },
        render: function(qs) {
            this.$outside = $('.content');
            this.$dropdown = this.$('.action-dropdown-content');
            return this;
        },
        toggleDropdown: function(e) {
            this.$dropdown.toggleClass('action-dropdown-open');
            if (this.$dropdown.hasClass('action-dropdown-open')) {
                e.stopPropagation();
                this.$outside.on('click', this.toggleDropdown);
            } else {
                this.$outside.off('click');
            }
        },
        triggerEvent: function(e) {
            e.preventDefault();
            context.trigger(this.$(e.target).data('event'));
        }
    });
});
