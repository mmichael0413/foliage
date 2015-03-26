define(function (require) {
    var Backbone = require('backbone'),
        context = require('context');

    return Backbone.View.extend({
        el: 'body',
        events: {
            "click .alert": "hideAlert"
        },
        initialize: function () {
            this.listenTo(context, 'error', this.displayAlert);
            this.render();
        },
        render: function () {
            this.$el.append('<div class="alert" style="display: none;"><h2>Whoops, something went wrong... Contact tech support.</h2></div>');
            return this;
        },
        displayAlert: function() {
            this.$('.alert').show().delay(5000).fadeOut();
        },
        hideAlert: function() {
            this.$('.alert').hide();
        }
    });
});