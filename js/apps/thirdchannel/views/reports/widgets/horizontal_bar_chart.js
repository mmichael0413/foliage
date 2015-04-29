define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        c3 = require('c3'),
        context = require('context');

    var defaultLegendColors = ["#F15F51", "#585E60", "#9FB2C0", "#A9BC4D"];


    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/horizontal_bar_chart'],
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            if (_.size(this.model.results.categories) > 0) {
                this.setElement(this.template(this.model));
                this.setupChart();
                this.listenTo(context, 'filter:queryString', this.updateViewBreakDownLink);
                context.trigger('filter:request:queryString');
            }
            return this;
        },
        setupChart: function () {
            var newHeight = _.size(this.model.results.categories) * 60,
                self = this;

            var chartConfig = {
                size: {
                    height: newHeight
                },
                data: {
                    columns: self.model.results.columns,
                    type: 'bar',
                    labels: {
                        format: function (v, id, i, j) {
                            if (i !== undefined && id !== undefined) {
                                return self.model.results.tooltips[i] + " " + id;
                            }
                        }
                    },
                    color: function (color, d) {
                        return defaultLegendColors[d.index % defaultLegendColors.length];
                    }

                },
                axis: {
                    rotated: true,
                    x: {
                        type: 'category',
                        categories: self.model.results.categories
                    },
                    y: {
                        tick: {
                            format: d3.format('%')
                        }
                    }
                },
                grid: {
                    focus: {
                        show: false
                    }
                },
                legend: {
                    show: false
                }
            };

            // Idea is that the chartConfig is returned from a call to the report service
            chartConfig.bindto = this.$('.chart')[0];

            if(window.pdf === undefined) {
                this.listenTo(context, 'report post render', _.debounce(function() {
                    setTimeout(function() {
                        c3.generate(chartConfig);
                    }, 500);
                }, 500));
            } else {
                this.listenTo(context, 'report post render', function() {
                    c3.generate(chartConfig);
                });
            }
        },
        updateViewBreakDownLink : function (qs) {
            var account = (this.model.report_filters.account !== undefined) ?  this.model.report_filters.account.id : 'all';
            this.$el.find('a.breakdown-link').attr("href", 'reports/' + account + '/info/' + this.model.widget_id + '?'+qs);
        }
    });
});