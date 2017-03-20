define(function(require) {
    var $ = require('jquery'),
        c3 = require('c3'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context');

    var view = Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/vertical_bar_chart'],
        initialize: function (options) {
          this.model = options;
          this.config = this.model.results;
        },
        render: function () {
          this.setElement(this.template(this.model));
          if (this.model.uuid) {
              this.listenTo(context, 'report post render widget_' + this.model.uuid, this.renderChart);
          } else {
              this.listenTo(context, 'report post render', this.renderChart);
          }
          return this;
        },

        renderChart: function() {
          var element = this.$el.find('.chart.vertical-bar')[0];
          var colors = ['#2FB44A', '#bdc5c4'];

          this.chart = c3.generate($.extend(true, this.config, {
            bindto: element,
            bar: {
              width: {
                ratio: 0.4
              }
            },
            size: {
              height: 165
            },
            axis: {
              x: {
                height: 1,
                tick: {
                  format: function (x) {
                    return '';
                  }
                }
              },
              y: {
                show: false
              }
            },
            tooltip: {
              show: false
            },
            interaction: {
              enabled: false
            },
            legend: {
              show: false
            }
          }));

          return this;
        }
    });
    return view;
});
