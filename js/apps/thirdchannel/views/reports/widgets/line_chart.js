define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        d3 = require('d3'),
        c3 = require('c3'),
        context = require('context');

    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/line_chart'],

        initialize: function (options) {
            this.model = options;
            this.config = this.model.results;
        },

        render: function () {
            if (_.size(this.model.results) > 0) {
                this.setElement(this.template(this.model));
                this.listenTo(context, 'filter:queryString', this.updateViewBreakDownLink);
                this.listenTo(context, 'report post render', this.renderChart);
                this.listenTo(context, 'report resize',      this.resizeChart);
                context.trigger('filter:request:queryString');
            }
            return this;
        },
        renderChart: function () {
            if (this.chart === undefined) {
                var self = this,
                    y_prefix  = (this.model.config.y_prefix  !== undefined) ? this.model.config.y_prefix + " "  : '',
                    y_postfix = (this.model.config.y_postfix !== undefined) ? " " + this.model.config.y_postfix : '';


                this.chart = c3.generate($.extend(true, this.config, {
                    axis: {
                        y: {
                            tick: {
                                format: function (x) {
                                    return y_prefix + x + y_postfix;
                                }
                            }
                        }
                    },
                    bindto: self.$el.find('.chart.line-chart')[0],
                    color: {
                        pattern: context.defaultLegendColors
                    }
                }));
            }
        },
        resizeChart: function() {
            if (this.chart !== undefined) {
                this.chart.flush();
            }
        },
        updateViewBreakDownLink : function (qs) {
            var account = (this.model.report_filters.account !== undefined) ?  this.model.report_filters.account.id : 'all';
            this.$el.find('a.breakdown-link').attr("href", 'reports/' + account + '/info/' + this.model.widget_id + '?'+qs);
        }
    });
});