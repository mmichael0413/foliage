define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        c3 = require('c3'),
        context = require('context');

    var view = Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/gauge_chart'],


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

        renderChart: function () {
            if (this.chart === undefined) {
                var element = this.$el.find('.chart.gauge-chart')[0];

                this.chart = c3.generate({
                    bindto: element,
                    data: {
                        columns: [
                            ['data', this.model.value]
                        ],
                        type: 'gauge',
                        labels: false
                    },
                    gauge: {
                      label: {
                        show: false
                      },
                      width: 25
                    },
                    color: {
                      pattern: ['#2FB44A']
                    },
                    size: {
                        width: 150,
                        height: 95
                    },
                    tooltip: {
                      show: false
                    },
                    interaction: {
                      enabled: false
                    }
                });

                this.$el.on('mresize', this.resizeChart);
            }
        },

        resizeChart: function() {
          if (this.chart !== undefined) {
            this.chart.resize();
          }
        }
    });

    return view;
});
