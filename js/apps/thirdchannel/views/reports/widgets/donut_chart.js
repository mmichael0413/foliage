define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        c3 = require('c3'),
        context = require('context');

    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/donut_chart'],

        initialize: function (options) {
            this.model = options;
            this.config = this.model.results;
        },

        render: function () {
            if (_.size(this.model.results) > 0) {
                this.setElement(this.template(this.model));
                this.setupChart();
                this.listenTo(context, 'filter:queryString', this.updateViewBreakDownLink);
                context.trigger('filter:request:queryString');
            }
            return this;
        },

        setupChart: function () {
            var self = this;

            this.chart = c3.generate($.extend(true, this.config, {
                bindto: self.$('.chart.donut-chart')[0],
                color: {
                    pattern: context.defaultLegendColors
                },
                tooltip: {
                    format: {
                        value: function(value, ratio, id, index) {
                            var label = value;
                            label += ' ' + (self.model.config.count_text ? self.model.config.count_text : 'stores');
                            if(ratio !== undefined) {
                                label = d3.format('.1%')(ratio) + "<br>" + label;
                            }
                            return label;
                        }
                    }
                }
            }));

            if(window.pdf === undefined) {
                this.listenTo(context, 'report post render', _.debounce(function () {
                    setTimeout(function() {
                        self.chart.flush();
                    }, 500);
                }, 500));
            } else {
                this.listenTo(context, 'report post render', function () {
                    self.chart.flush();
                });
            }
        },
        updateViewBreakDownLink : function (qs) {
            var account = (this.model.report_filters.account !== undefined) ?  this.model.report_filters.account.id : 'all';
            this.$el.find('a.breakdown-link').attr("href", 'reports/' + account + '/info/' + this.model.widget_id + '?'+qs);
        }
    });
});