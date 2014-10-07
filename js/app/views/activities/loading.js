define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'handlebarsTemplates'
], function($, _, Backbone, Handlebars, HandlebarsTemplates){
    return Backbone.View.extend({
        className: 'isLoading',
        template: HandlebarsTemplates.loading(),
        initialize: function () {
            this.active = false;
        },
        render: function () {
            this.$el.html(this.template);
            this.active = true;
            return this;
        },
        removeFromDOM: function () {
            this.remove();
            this.active = false;
        }
    });
});