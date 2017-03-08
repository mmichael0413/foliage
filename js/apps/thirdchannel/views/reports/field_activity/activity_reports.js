define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
      template: HandlebarsTemplates['thirdchannel/reports/field_activity/activity_reports'],

      initialize: function() {
        this.render();
      },

      render: function() {
        this.$el.html(this.template(this.model));
      }
    });
});
