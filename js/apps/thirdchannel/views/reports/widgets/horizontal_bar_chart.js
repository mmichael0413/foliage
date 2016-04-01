define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        d3 = require('d3'),
        c3 = require('c3'),
        ViewBreakdownLinkMixin = require('thirdchannel/views/reports/widgets/view_breakdown_link_mixin'),
        context = require('context'),
        mresize = require('mresize');

    var defaultLegendColors = ["#F15F51", "#585E60", "#9FB2C0", "#A9BC4D"];


    var view = Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/bar_chart'],
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
                        context.trigger('filter:request:queryString');
                    });
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
                this.$el.on('mresize', this.resizeChart);
            }
        },
        resizeChart: function(e, data) {
            if (this.chart !== undefined) {
                this.chart.resize();
            }
        }
    });
    _.extend(view.prototype, ViewBreakdownLinkMixin);
    return view;
});
