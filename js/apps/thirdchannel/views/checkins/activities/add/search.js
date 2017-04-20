define(function(require) {
    var context = require('context'),
        Backbone = require('backbone'),
        Select2 = require('select2');

    return Backbone.View.extend({
        el: '.filter-container',

        events: {
            "input [type=text]": "broadcast",
            "change :not([type=text])": "broadcast",
            "click .advanced-filters": "expand"
        },

        render: function () {
            this.$('select').select2();
            this.$form = this.$('form');
            this.$expander = this.$('.filter-group-expanded');
            this.$indicator = this.$('.advanced-filters i');

            if (!this.$expander.is(':visible')) {
                this.toggleIndicator();
            }

            return this;
        },

        broadcast: function(e, data) {
            context.trigger('list:search:update', this.$form.serializeObject());
            context.trigger('list:search:updated');
        },

        expand: function () {
            this.$expander.slideToggle('fast');
            this.toggleIndicator();
        },

        toggleIndicator: function() {
            this.$indicator.toggleClass('ic_up').toggleClass('ic_down');
        }
    });
});
