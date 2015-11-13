define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    var View = Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/store_profile/sales/brands_breakdown'],

        render: function() {

            return this;
        }
    });

    return View;
});