define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
      template: HandlebarsTemplates['thirdchannel/reports/field_activity/kpis/average_and_top_3'],

      initialize: function() {
        this.render();
      },

      render: function() {
        this.$el.append(this.template(this.model));
        return this;
      }
    });
});
