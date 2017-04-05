define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        GenericMetric = require('thirdchannel/views/reports/field_activity/kpis/generic_metric'),
        TotalWithBreakdownView = require('thirdchannel/views/reports/field_activity/kpis/total_with_breakdown'),
        TotalView = require('thirdchannel/views/reports/field_activity/kpis/total'),
        SalesAndUnitsPercentageView = require('thirdchannel/views/reports/field_activity/kpis/sales_and_unit_percentage'),
        WidgetView = require('thirdchannel/views/reports/index/widget');

    return Backbone.View.extend({
      colors: [
        "#2FB44A",
        "#BDC5C4"
      ],

      initialize: function(options) {
        if (this.model.type) {
          this.renderKPI(this.model.type);
        } else {
          this.renderKPI(this.model.name);
        }
      },

      renderKPI: function(type) {
        switch(type) {
          case "Total":
            new TotalView({model: this.model, el: this.el});
            break;
          case "isPrimeLocation":
          case "areCollectionsAdjacent":
          case "areCollectionsTogether":
            var donutChartModel = this._getDonutChartModel(this.model);
            this.$el.append(new WidgetView(donutChartModel).render().$el);
            break;
          case "averagePercentOfTargetMet":
            new SalesAndUnitsPercentageView({model: this.model, el: this.el});
            break;
          case "TotalWithBreakdown":
            new TotalWithBreakdownView({model: this.model, el: this.el});
            break;
          default:
            // TODO: Rename to GenericMetric
            new GenericMetric({model: this.model, el: this.el, displayDirection: this.model.displayDirection || 'row'});
            break;
        }
      },

      _getDonutChartModel: function(model) {
        var breakdowns = model.breakdown;
        var percentage = (model.data[0].value * 100) + model.data[0].postfix;
        var columnBreakdown = _.map(breakdowns, function(breakdown) {
          var label = this._generateLabelFromBreakdown(breakdown);
          var result = [
            label,
            breakdown[1].value
          ];
          return result;
        }.bind(this));
        var labelBreakdown = _.map(breakdowns, function(breakdown, key) {
          var result = {
            label: this._generateLabelFromBreakdown(breakdown),
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
      },

      _generateLabelFromBreakdown: function(breakdown) {
        return breakdown[0].label + " (" + breakdown[1].value + " " + breakdown[1].label +  ")";
      }
    });
});
