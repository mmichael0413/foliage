define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        Chartist = require('chartist'),
        context = require('context');

    return Backbone.View.extend({
        tagName: 'span',
        template: HandlebarsTemplates['thirdchannel/reports/widgets/stacked_bar'],
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            if (_.size(this.model.results.series) > 0) {
                this.$el.html(this.template(this.model));
                this.setupChart();
                this.listenTo(context, 'filter:queryString', this.updateViewBreakDownLink);
                context.trigger('filter:request:queryString');
            }
            return this;
        },
        setupChart: function () {
            var config = this.model.config;
            var options = {
                stackBars: true,
                chartPadding: 5,
                centerBars: false,
                seriesBarDistance: 60,
                reverseData: true,
                horizontalBars: true,
                fullWidth: true,
                axisY: {
                    offset: 200,
                    labelOffset: {
                        x: 0,
                        y: 0
                    },
                    scaleMinSpace: 10
                },
                axisX: {
                    labelInterpolationFnc: function(label, index) {
                        if(config.x_prefix) {
                            label = config.x_prefix + label;
                        }
                        if(config.x_postfix) {
                            label = label + config.x_postfix;
                        }
                        return label;
                    }
                }
            };

            new Chartist.Bar(this.$('.ct-chart')[0], this.model.results, options);
        },
        updateViewBreakDownLink : function (qs) {
            var account = (this.model.report_filters.account !== undefined) ?  this.model.report_filters.account.id : 'all';
            this.$('a.breakdown-link').attr("href", 'reports/' + account + '/info/' + this.model.widget_id + '?'+qs);
        }
    });
});