define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        FilterControlView = require('app/views/filter/filterControl');

    return Backbone.View.extend({
        el: '#site-filter',
        template: HandlebarsTemplates.filters,
        initialize: function (options) {
            this.filters = options.filters;
        },
        render: function () {
            this.$el.append(this.template(this.filters));
            new FilterControlView();
            return this;
        }
    });
});