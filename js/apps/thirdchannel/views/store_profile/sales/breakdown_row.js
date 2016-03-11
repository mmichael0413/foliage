define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    var View = Backbone.View.extend({
        tagName: 'tr',
        template: HandlebarsTemplates['thirdchannel/store_profile/sales/breakdown_row'],

        render: function() {
            this.$el.html(this.template(this.model.attributes));
            if(this.model.get('index') === 0) {
                this.$('td:first').addClass('breakdown-label');
            }
            return this;
        }
    });

    return View;
});