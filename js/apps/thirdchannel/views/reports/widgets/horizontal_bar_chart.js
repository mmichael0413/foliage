define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        d3 = require('d3'),
        c3 = require('c3'),
        context = require('context');

    var defaultLegendColors = ["#F15F51", "#585E60", "#9FB2C0", "#A9BC4D"];


    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/bar_chart'],
        initialize: function (options) {
            this.model = options;
            this.config = this.model.results;
        },
        render: function () {
            if (_.size(this.model.results) > 0) {
                this.setElement(this.template(this.model));
                this.listenTo(context, 'filter:queryString', this.updateViewBreakDownLink);
                this.listenTo(context, 'report post render', this.createChart);
                this.listenTo(context, 'report resize',      this.resizeChart);
                context.trigger('filter:request:queryString');
            }
            return this;
        },
        createChart: function () {
            if (this.chart === undefined) {
                var self = this,
                    bar_prefix  = (this.model.config.bar_prefix  !== undefined) ? this.model.config.bar_prefix + " "  : '',
                    bar_postfix = (this.model.config.bar_postfix !== undefined) ? " " + this.model.config.bar_postfix : '',
                    y_prefix  = (this.model.config.y_prefix  !== undefined) ? this.model.config.y_prefix + " "  : '',
                    y_postfix = (this.model.config.y_postfix !== undefined) ? " " + this.model.config.y_postfix : '',
                    colors = this.model.config.colors || defaultLegendColors;

                this.chart = c3.generate($.extend( true, this.config, {
                    axis: {
                        rotated: true,
                        y: {
                            tick: {
                                format: function (x) {
                                    return y_prefix + x + y_postfix;
                                }
                            }
                        }
                    },
                    bindto: self.$('.chart.horizontal-bar')[0],
                    data: {
                        labels: {
                            format: function (v, id, i, j) {
                                if (i !== undefined && id !== undefined) {
                                    return bar_prefix + self.config.tooltip.values[i] + bar_postfix;
                                }
                            }
                        },
                        color: function (color, d) {
                            return colors[d.index % colors.length];
                        }
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