define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/loading'],
        initialize: function () {
        },
        render: function () {
            this.$el.html(this.template(this.model));
            return this;
        }
    });
});
