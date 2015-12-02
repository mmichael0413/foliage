define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    var View = Backbone.View.extend({
        className: 'item pure-g',

        template: HandlebarsTemplates['thirdchannel/store_profile/sales/breakdown_row'],

        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });

    return View;
});