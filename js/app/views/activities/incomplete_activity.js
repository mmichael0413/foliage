define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

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