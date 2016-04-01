define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        d3 = require('d3'),
        c3 = require('c3'),
        ViewBreakdownLinkMixin = require('thirdchannel/views/reports/widgets/view_breakdown_link_mixin'),
        context = require('context');

    var view = Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/line_chart'],

        initialize: function (options) {
            this.model = options;
            this.config = this.model.results;
            _.bindAll(this, 'resizeChart');
        },

        render: function () {
            if (_.size(this.model.results) > 0) {
                this.setElement(this.template(this.model));
                if (this.model.show_view_list !== undefined) {
                    this.listenTo(context, 'filter:queryString', function (qs) {
                        this.updateViewBreakDownLink(qs, this.model);
                    });
                    context.trigger('filter:request:queryString');
                }
                if (this.model.uuid) {
                    this.listenTo(context, 'report post render widget_' + this.model.uuid, this.renderChart);
                } else {
                    this.listenTo(context, 'report post render', this.renderChart);
                }
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
                this.$el.on('mresize', this.resizeChart);
            }
        },
        resizeChart: function() {
            if (this.chart !== undefined) {
                this.chart.resize();
            }
        }
    });
    _.extend(view.prototype, ViewBreakdownLinkMixin);
    return view;
});
