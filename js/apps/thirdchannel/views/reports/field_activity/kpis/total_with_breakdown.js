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
        debugger
        if (this.model.chartType === "donut") {
          var donutChartModel = this._generateDonutChartModel(this.model);
          this.$el.find('.chart.' + this.model.name).append(new WidgetView(donutChartModel).render().$el);
        } else if (this.model.chartType === "bar") {
          this.$el.find('.chart.' + this.model.name).html('<div>boop! needs a chart!</div>');
          console.log("do the bar")
        }
        return this;
      },

      _generateDonutChartModel: function(model) {
        var breakdowns = model.data.breakdown;
        // var percentage = (breakdowns[0].instances / [breakdowns[0].instances + breakdowns[1].instances] * 100).toFixed(0) + "%";
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
