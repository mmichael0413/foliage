define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        TotalAndAverageView = require('thirdchannel/views/reports/field_activity/kpis/total_and_average'),
        TotalView = require('thirdchannel/views/reports/field_activity/kpis/total'),
        CurrencyAndUnitsView = require('thirdchannel/views/reports/field_activity/kpis/currency_and_units'),
        UnitsAndCapacityView = require('thirdchannel/views/reports/field_activity/kpis/units_and_capacity'),
        WidgetView = require('thirdchannel/views/reports/index/widget');

    return Backbone.View.extend({
      colors: [
        "#2FB44A",
        "#BDC5C4"
      ],

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
          case "UnitsMovedAndCapacity":
            new UnitsAndCapacityView({model: this.model, el: this.el});
            break;
          case "PercentageAndBreakdown":
            var donutChartModel = this._getDonutChartModel(this.model);
            this.$el.append(new WidgetView(donutChartModel).render().$el);
            context.trigger("report post render");
            break;
          default:
            console.log('KPI view not found: ' + type);
            break;
        }
      },

      _getDonutChartModel: function(model) {
        var breakdowns = model.data.breakdown;
        var percentage = (breakdowns[0].instances / [breakdowns[0].instances + breakdowns[1].instances] * 100).toFixed(0) + "%";
        var columnBreakdown = _.map(breakdowns, function(breakdown) {
          var result = [
            breakdown.value + " (" + breakdown.instances + " " + breakdown.label + ")",
            breakdown.instances
          ];
          return result;
        });
        var labelBreakdown = _.map(breakdowns, function(breakdown, key) {
          var result = {
            label: breakdown.value + " (" + breakdown.instances + " " + breakdown.label + ")",
            color: this.colors[key]
          };
          return result;
        }.bind(this));

        model.display_type = 1;
        model.title = this.model.label;
        model.config = {
          hideTooltip: true,
          additionalClasses: 'column'
        };

        model.results = {
          data: {
            columns: columnBreakdown,
            type: "donut"
          },
          color: {
            pattern: this.colors
          },
          size: {
            height: 150
          },
          donut: {
              title: percentage,
              label: {
                show: false
              }
          },
          legend: {
            show: false,
            items: labelBreakdown
          }
        };

        return model;
      }
    });
});
