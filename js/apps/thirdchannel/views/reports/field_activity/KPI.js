define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        TotalAndAverageView = require('thirdchannel/views/reports/field_activity/kpis/total_and_average'),
        TotalView = require('thirdchannel/views/reports/field_activity/kpis/total'),
        CurrencyAndUnitsView = require('thirdchannel/views/reports/field_activity/kpis/currency_and_units');

    return Backbone.View.extend({
      initialize: function(options) {
        this.renderKPI(this.model.type);
      },

      renderKPI: function(type) {
        switch(type) {
          case "TotalAndAverage":
            new TotalAndAverageView({model: this.model, el: this.el});
            break;
          case "Total":
            new TotalView({model: this.model, el: this.el});
            break;
          case "CurrencyAndUnits":
            new CurrencyAndUnitsView({model: this.model, el: this.el});
            break;
          default:
            console.log('KPI view not found: ' + type);
            break;
        }
      }
    });
});
