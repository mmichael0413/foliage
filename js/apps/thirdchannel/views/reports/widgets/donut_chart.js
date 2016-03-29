define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        c3 = require('c3'),
        ViewBreakdownLinkMixin = require('thirdchannel/views/reports/widgets/view_breakdown_link_mixin'),
        context = require('context');

    var view = Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/donut_chart'],

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
                var self = this;
                this.chart = c3.generate($.extend(true, this.config, {
                    bindto: self.$('.chart.donut-chart')[0],
                    color: {
                        pattern: ["#F15F51", "#9FB2C0", "#A9BC4D", "#8079b8", "#85c194", "#deb99a", "#bce4f9", "#f69d6d", "#8ab2ca", "#a53426", "#8c8d8e", "#00a55a", "#deb99a", "#ef6222", "#4cc3f1", "#025832"]
                    },
                    tooltip: {
                        format: {
                            value: function (value, ratio, id, index) {
                                var label = value;
                                label += ' ' + (self.model.config.count_text ? self.model.config.count_text : 'stores');
                                if (ratio !== undefined) {
                                    label = d3.format('.1%')(ratio) + "<br>" + label;
                                }
                                return label;
                            }
                        }
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
