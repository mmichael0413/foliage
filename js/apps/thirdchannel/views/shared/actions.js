define(function(require) {
    var context = require('context'),
        Backbone = require('backbone'),
        ConfirmationModal = require('thirdchannel/modals/confirmation');

    return Backbone.View.extend({
        el: '.actions-container',
        events: {
            'click .action-dropdown button': 'toggleDropdown',
            'click .action-dropdown-content a': 'toggleDropdown',
            'click .action-dropdown-content a.external-event': 'triggerEvent',
            'click .action-dropdown-content a[data-confirm]': 'confirm'
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
        },
        confirm: function(e) {
            e.preventDefault();
            e.stopPropagation();
            var model = new Backbone.Model(this.$(e.currentTarget).data());
            this.$outside.append(new ConfirmationModal({model: model}).render().el);
        }
    });
});
