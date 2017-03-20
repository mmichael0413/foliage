define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        WidgetView = require('thirdchannel/views/reports/index/widget'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
      template: HandlebarsTemplates['thirdchannel/reports/field_activity/kpis/total_with_breakdown'],
      colors: [
        "#2FB44A",
        "#BDC5C4"
      ],

      initialize: function(options) {
        this.model = options.model;
        this.el = options.el;
        this.render();
      },

      render: function() {
        this.$el.append(this.template(this.model));

        if (this.model.chartType === "donut") {
          var donutChartModel = this._generateDonutChartModel(this.model);
          this.$el.find('.chart.' + this.model.name).append(new WidgetView(donutChartModel).render().$el);
        } else if (this.model.chartType === "bar") {
          var barChartModel = this._generateBarChartModel(this.model);
          barChartModel.display_type = 21;
          // this.$el.find('.chart.' + this.model.name).html('<div>boop! needs a chart!</div>');
          this.$el.find('.chart.' + this.model.name).append(new WidgetView(barChartModel).render().$el);
        }
        return this;
      },

      _generateBarChartModel: function(model) {
        var colors = this.colors;
        var breakdowns = model.data.breakdown;
        var columnBreakdown = _.map(breakdowns, function(breakdown) {
          return breakdown.percentage.value;
        });
        var labelBreakdown = _.map(breakdowns, function(breakdown, key) {
          var result = {
            label: breakdown.percentage.value + "% " + breakdown.percentage.label + " (" + breakdown.subtotal.value + " " + breakdown.subtotal.label + ")",
            color: colors[key]
          };
          return result;
        });

        columnBreakdown = _.flatten(['visitData', columnBreakdown]);

        model.display_type = 21;

        model.results = {
          data: {
            columns: [columnBreakdown],
            type: 'bar',
            color: function (color, d) {
                return colors[d.index % colors.length];
            },
            labels: {
              format: function (v, id, i, j) {
                return v + "%";
              }
            }
          },
          legend: {
            show: false,
            items: labelBreakdown
          }
        };

        return model;
      },

      _generateDonutChartModel: function(model) {
        var breakdowns = model.data.breakdown;
        var columnBreakdown = _.map(breakdowns, function(breakdown) {
          var result = [
            breakdown.percentage.value + "% " + breakdown.percentage.label + " (" + breakdown.subtotal.value + " " + breakdown.subtotal.label + ")",
            breakdown.subtotal.value
          ];
          return result;
        });
        var labelBreakdown = _.map(breakdowns, function(breakdown, key) {
          var result = {
            label: breakdown.percentage.value + "% " + breakdown.percentage.label + " (" + breakdown.subtotal.value + " " + breakdown.subtotal.label + ")",
            color: this.colors[key]
          };
          return result;
        }.bind(this));

        model.display_type = 1;
        model.config = {
          hideTooltip: true,
          additionalClasses: 'column',
          staticSize: true
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
