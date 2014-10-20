define(function(require) {
    var Backbone = require('backbone');

    return Backbone.View.extend({
        el: ".section",
        events: {
            'click .expand-indicator' : 'toggleBody'
        },
        initialize: function (options) {
            this.setElement(options.el);
        },
        render: function () {
            return this;
        },
        toggleBody: function () {
            this.$el.find('.expand-indicator').toggleClass('open');
            this.$el.find('.body').slideToggle( "fast" );
        }
    });
});