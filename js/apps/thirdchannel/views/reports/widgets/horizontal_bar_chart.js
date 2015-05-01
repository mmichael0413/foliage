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
                this.setupChart();
                this.listenTo(context, 'filter:queryString', this.updateViewBreakDownLink);
                context.trigger('filter:request:queryString');
            }
            return this;
        },
        setupChart: function () {
            var self = this,
                y_prefix  = (this.model.config.y_prefix  !== undefined) ? this.model.config.y_prefix + " "  : '',
                y_postfix = (this.model.config.y_postfix !== undefined) ? " " + this.model.config.y_postfix : '';

            this.config = $.extend( true, this.config, {
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
                                return self.config.tooltip.values[i] + " " + id;
                            }
                        }
                    },
                    color: function (color, d) {
                        return defaultLegendColors[d.index % defaultLegendColors.length];
                    }
                }
            });



            if(window.pdf === undefined) {
                this.listenTo(context, 'report post render', _.debounce(function () {
                    setTimeout(function() {
                        console.log(self.config);
                        c3.generate(self.config);
                    }, 500);
                }, 500));
            } else {
                this.listenTo(context, 'report post render', function () {
                    c3.generate(self.config);
                }, 500);
            }
        },
        updateViewBreakDownLink : function (qs) {
            var account = (this.model.report_filters.account !== undefined) ?  this.model.report_filters.account.id : 'all';
            this.$el.find('a.breakdown-link').attr("href", 'reports/' + account + '/info/' + this.model.widget_id + '?'+qs);
        }
    });
});