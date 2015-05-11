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
                this.listenTo(context, 'filter:queryString', this.updateViewBreakDownLink);
                this.listenTo(context, 'report post render', this.renderChart);
                this.listenTo(context, 'report resize',      this.resizeChart);
                context.trigger('filter:request:queryString');
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