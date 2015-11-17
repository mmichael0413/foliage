define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        BreakdownGroup = require('thirdchannel/views/store_profile/sales/breakdown_group');

    var View = Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/store_profile/sales/breakdown'],

        initialize: function(options) {
            this.title = options.title
        },

        render: function() {
            this.$el.html(this.template({title: this.title}));
            this.renderBreakdownGroups();
            return this;
        },

        renderBreakdownGroups: function() {
            var $body = this.$('.body');
            this.collection.each(function(breakdownGroup) {
                var view = new BreakdownGroup({collection: breakdownGroup.breakdowns});
                $body.append(view.render().el);
            });
        }
    });

    return View;
});