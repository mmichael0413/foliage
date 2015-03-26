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
            var wWidth = $(window).width(),
                wHeight = $(window).height(),
                width = this.$('.alert').width(),
                height = 75,
                top = (wHeight/2) - (height/2),
                left = (wWidth/2) - (width/2);

            this.$('.alert').css({'left': left, 'top': top});
            this.$('.alert').show().delay(3500).fadeOut();
        },
        hideAlert: function() {
            this.$('.alert').hide();
        }
    });
});