define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        NVD3 = require('nvd3'),
        context = require('context');

    return Backbone.View.extend({
        tagName: 'span',
        template: HandlebarsTemplates['thirdchannel/reports/widgets/generic_horizontal_bar_chart'],
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            if(this.model.results !== undefined && _.size(this.model.results) > 0) {
                this.$el.html(this.template(this.model));
                this.setupHorizontalBarChart();
                this.listenTo(context, 'filter:queryString', this.updateViewBreakDownLink);
                context.trigger('filter:request:queryString');
            }
            return this;
        },
        setupHorizontalBarChart: function () {
            var self = this,
                $chartContainer = this.$('.chart svg');
            console.log($chartContainer);

            nv.addGraph(function() {
                var chart = nv.models.multiBarHorizontalChart()
                                        .x(function(d) { return d.label })
                                        .y(function(d) { return d.value })
                                        .margin({top: 30, right: 20, bottom: 50, left: 175})
                                        .showValues(true)           //Show bar value next to each bar.
                                        .tooltips(true)//Show tooltips on hover.
                                        .showControls(false);        //Allow user to switch between "Grouped" and "Stacked" mode.

                chart.yAxis
                     .tickFormat(d3.format(',.2f'));

                d3.select($chartContainer[0])
                    .datum(self.model.results)
                    .call(chart);

                nv.utils.windowResize(chart.update);

                return chart;
            });

            this.listenTo(context, 'report post render', function () {
                //new Chart(canvas[0].getContext("2d")).Bar(self.data, self.chartOptions);
            });
        },
        updateViewBreakDownLink : function (qs) {
            var account = (this.model.report_filters.account !== undefined) ?  this.model.report_filters.account.id : 'all';
            this.$el.find('a.breakdown-link').attr("href", 'reports/' + account + '/info/' + this.model.widget_id + '?'+qs);
        }
    });
});