define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        tagName: 'tr',
        template: HandlebarsTemplates.dashboard_alerts_show_store,
        initialize: function (options) {
            this.model = options.model;
        },
        render: function () {
            var self = this;
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
});


