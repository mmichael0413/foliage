define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'handlebarsTemplates'
], function($, _, Backbone, Handlebars, HandlebarsTemplates){
    return Backbone.View.extend({
        className: 'activity incomplete',
        template: HandlebarsTemplates.incomplete_activities,
        initialize: function (options) {
            this.model = options.model;
            return this;
        },
        render: function () {
            this.$el.html(this.template(this.model.attributes));

            return this;
        }
    });
});