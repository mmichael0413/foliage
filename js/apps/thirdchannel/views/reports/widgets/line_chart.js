define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        Charts = require('chartjs'),
        context = require('context');

    var defaultLegendColors = ["#F15F51", "#9FB2C0", "#A9BC4D", "#8079b8", "#85c194", "#deb99a", "#bce4f9", "#f69d6d", "#8ab2ca", "#a53426", "#8c8d8e", "#00a55a", "#deb99a", "#ef6222", "#4cc3f1", "#025832", "#585E60"];

    return Backbone.View.extend({
        tagName: 'span',
        template: HandlebarsTemplates['thirdchannel/reports/widgets/line_chart'],

        initialize: function (options) {
            this.model = options;
            this.setupColors();
        },

        render: function () {
            if (_.size(this.model.results) > 0) {
                this.$el.html(this.template(this.model));
                this.setupChart();
                this.listenTo(context, 'filter:queryString', this.updateViewBreakDownLink);
                context.trigger('filter:request:queryString');
            }
            return this;
        },

        setupChart: function () {
            var self = this,
                canvas = this.$el.find('canvas');

            var scaleLabel = "value";
            if(this.model.config.y_prefix !== undefined) {
                scaleLabel = "'" + this.model.config.y_prefix + "' + " + scaleLabel;
            }
            if(this.model.config.y_postfix !== undefined) {
                scaleLabel = scaleLabel + " + '" + this.model.config.y_postfix + "'";
            }
            scaleLabel = "<%= " + scaleLabel + " %>";

            var options = _.extend({
                animation: false,
                responsive: true,
                scaleShowGridLines : true,
                scaleGridLineColor : "rgba(0,0,0,.05)",
                scaleGridLineWidth : 1,
                scaleShowHorizontalLines: true,
                scaleShowVerticalLines: true,
                scaleSteps: 10,
                scaleStepWidth: 10,
                bezierCurve : true,
                bezierCurveTension : 0.4,
                pointDot : true,
                pointDotRadius : 4,
                pointDotStrokeWidth : 1,
                pointHitDetectionRadius : 20,
                datasetStroke : true,
                datasetStrokeWidth : 2,
                datasetFill : false,
                showTooltips: false,
                scaleLabel: scaleLabel,
                defaultLegendColors: this.legendColors,
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
            }, this.model.config);

            if(window.pdf === undefined) {
                this.listenTo(context, 'report post render', _.debounce(function () {
                    setTimeout(function() {
                        new Chart(canvas[0].getContext("2d")).Line(self.model.results, options);
                    }, 500);
                }, 500));
            } else {
                this.listenTo(context, 'report post render', function() {
                    new Chart(canvas[0].getContext("2d")).Line(self.model.results, options);
                });
            }
        },

        toggleSeries: function(e) {
            e.preventDefault();
            // TODO: toggle series on the chart (redraw)
        },

        updateViewBreakDownLink : function (qs) {
            var account = (this.model.report_filters.account !== undefined) ?  this.model.report_filters.account.id : 'all';
            this.$el.find('a.breakdown-link').attr("href", 'reports/' + account + '/info/' + this.model.widget_id + '?'+qs);
        },
        setupColors: function() {
            var self = this,
                total_entries = this.model.results.datasets.length;

            if(this.model.config.legendColors === undefined) {
                this.model.config.legendColors = {};
                _.each(this.model.results.datasets, function(dataset, index) {
                    self.model.config.legendColors[dataset.label] = defaultLegendColors[index % defaultLegendColors.length];
                });
            }

            _.each(self.model.results.datasets, function(dataset, index) {
                dataset.fillColor = self.model.config.legendColors[dataset.label];
                dataset.strokeColor = self.model.config.legendColors[dataset.label];
                dataset.pointStrokeColor = self.model.config.legendColors[dataset.label];
                dataset.pointColor = self.model.config.legendColors[dataset.label];
            });
        }

    });
});