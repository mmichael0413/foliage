define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        _ = require('underscore'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        WidgetView = require('thirdchannel/views/reports/index/widget');

    return Backbone.View.extend({
      template: HandlebarsTemplates['thirdchannel/reports/field_activity/kpis/sales_and_unit_percentage'],

      initialize: function() {
        this.render();
      },

      render: function() {
        this.$el.append(this.template(this.model));
        this.renderGauges();
        return this;
      },

      renderGauges: function() {
        _.each(this.model.data, function(model, key) {
          model.display_type = 20;
          this.$el.find('.kpi[data-metric=' + key + '] .gauge-container').append(new WidgetView(model).render().$el);
        }.bind(this));

        context.trigger("report post render");
      }
    });
});
