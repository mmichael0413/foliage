define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        Charts = require('chartjs'),
        context = require('context');

    return Backbone.View.extend({
        tagName: 'span',
        template: HandlebarsTemplates['thirdchannel/reports/widgets/line_chart'],

        initialize: function (options) {
            this.model = options;
        },

        render: function () {
            if (_.size(this.model.results) > 0) {
                this.$el.html(this.template(this.model));
                this.setupChart();
            }
            return this;
        },

        setupChart: function () {
            var self = this,
                canvas = this.$el.find('canvas'),
                total_entries = this.model.results.datasets.length;

            var options = {
                animation: false,
                responsive: true,
                scaleShowGridLines : true,
                scaleGridLineColor : "rgba(0,0,0,.05)",
                scaleGridLineWidth : 1,
                scaleShowHorizontalLines: true,
                scaleShowVerticalLines: true,
                bezierCurve : true,
                bezierCurveTension : 0.4,
                pointDot : true,
                pointDotRadius : 4,
                pointDotStrokeWidth : 1,
                pointHitDetectionRadius : 20,
                datasetStroke : true,
                datasetStrokeWidth : 2,
                datasetFill : false,
                scaleLabel: "<%= value+'%' %>",
                defaultLegendColors: ["#585E60", "#F15F51", "#9FB2C0", "#A9BC4D", "#8079b8", "#85c194", "#deb99a", "#bce4f9", "#f69d6d", "#8ab2ca", "#a53426", "#8c8d8e", "#00a55a", "#deb99a", "#ef6222", "#4cc3f1", "#025832"],
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
            };

            var length_length = options.defaultLegendColors.length;

            _.each(self.model.results.datasets, function(dataset, index) {
                dataset.fillColor = options.defaultLegendColors[(total_entries - index) % length_length];
                dataset.strokeColor =  options.defaultLegendColors[(total_entries - index) % length_length];
            });

            this.listenTo(context, 'report post render', function () {
                new Chart(canvas[0].getContext("2d")).Line(self.model.results, options);
            });
        },

        toggleSeries: function(e) {
            e.preventDefault();
            // TODO: toggle series on the chart (redraw)
        },

        updateViewBreakDownLink : function (qs) {

        }
    });
});