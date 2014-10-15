define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        dispatcher = require('app/utils/eventListener');

    return Backbone.View.extend({
        className: 'active-filter flexible',

        initialize: function (options) {
            this.options = options;
        },

        events: {
            //'remove' is built-in
            'click .btn': 'clearHandler'
        },

        render: function () {

            this.$el.html(HandlebarsTemplates.filter_active_item(this.options));
            return this;
        },

        clearHandler:function (e) {
            e.stopPropagation();
            e.preventDefault();
            this.clear();
            dispatcher.trigger('filter:request');
        },

        clear: function () {

            dispatcher.trigger(this.options.param + ':filter:clear', this.options);
            this.remove();
        },
        getQueryValue: function () {
            return this.options.value;
        }
    });
});