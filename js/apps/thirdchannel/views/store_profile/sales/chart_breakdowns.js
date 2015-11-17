define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        c3 = require('c3'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    var View = Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/store_profile/sales/chart_breakdowns'],

        render: function() {
            this.$el.html(this.template());
            this.renderChangeInSales();
            return this;
        },

        renderChangeInSales: function() {
            console.log(this.model);
        }
    });

    return View;
});