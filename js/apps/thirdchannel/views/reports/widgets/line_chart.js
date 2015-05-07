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
                this.setupChart();
                this.listenTo(context, 'filter:queryString', this.updateViewBreakDownLink);
                context.trigger('filter:request:queryString');
            }
            return this;
        },

        setupChart: function () {
            var self = this;

            if(window.pdf === undefined) {
                this.listenTo(context, 'report post render', _.debounce(function () {
                    setTimeout(function() {
                        self.createChart();
                        self.chart.flush();
                    }, 500);
                }, 500));
            } else {
                this.listenTo(context, 'report post render', function () {
                    self.createChart();
                    self.chart.flush();
                });
            }
        },
        createChart: function() {
            // Temp fix for the fact that the line chart area color does not update on flush if the original size is 0
            var self = this;
            if (this.chart === undefined) {
                this.chart = c3.generate(_.extend(this.config, {
                    bindto: self.$el.find('.chart.line-chart')[0],
                    color: {
                        pattern: context.defaultLegendColors
                    }
                }));
            }
        },
        updateViewBreakDownLink : function (qs) {
            var account = (this.model.report_filters.account !== undefined) ?  this.model.report_filters.account.id : 'all';
            this.$el.find('a.breakdown-link').attr("href", 'reports/' + account + '/info/' + this.model.widget_id + '?'+qs);
        }
    });
});