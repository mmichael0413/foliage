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
            new Chartist.Bar(this.$('.ct-chart')[0], this.model.results, {
                stackBars: true,
                chartPadding: 5,
                seriesBarDistance: 60,
                reverseData: true,
                horizontalBars: true,
                axisY: {
                    offset: 100,
                    labelOffset: {
                        x: 0,
                        y: 40
                    },
                    scaleMinSpace: 10
                }
            });

            this.listenTo(context, 'report post render', function () {});
        },
        updateViewBreakDownLink : function (qs) {
            var account = (this.model.report_filters.account !== undefined) ?  this.model.report_filters.account.id : 'all';
            this.$el.find('a.breakdown-link').attr("href", 'reports/' + account + '/info/' + this.model.widget_id + '?'+qs);
        }
    });
});