define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        c3 = require('c3'),
        ViewBreakdownLinkMixin = require('thirdchannel/views/reports/widgets/view_breakdown_link_mixin'),
        context = require('context');

    var view = Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/donut_chart'],

        events: {
            'mouseenter .legend-item:not(.unselected)': 'highlightItem',
            'mouseleave .legend-item:not(.unselected)': 'unhighlightItem',
            'click .legend-item': 'toggleData'
        },

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
        },

        highlightItem: function(e) {
            this.$('.legend-item').not(e.target).addClass('unhighlighed');
            this.chart.focus(this.$(e.target).data('chart-id'));
        },

        unhighlightItem: function(e) {
            this.$('.legend-item').not(e.target).removeClass('unhighlighed');
            this.chart.revert();
        },

        toggleData: function(e) {
            this.$(e.target).toggleClass('unselected');
            this.chart.toggle(this.$(e.target).data('chart-id'));
            this.unhighlightItem(e);
        }
    });
    _.extend(view.prototype, ViewBreakdownLinkMixin);
    return view;
});
