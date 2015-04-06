define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        d3 = require('d3'),
        context = require('context');

    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/heatmap'],
        initialize: function (options) {
            var self = this,
                legend = {};

            this.model = options;

            // Build the legend collection (dealing with hstore -> json weirdness)
            this.model.config.legend = JSON.parse(this.model.config.legend);

            _.each(this.model.config.legend, function(key, i) {
               legend[key] = self.model.config.legendColors[i];
            });

            this.model.config.legend = legend;

            console.log(this.model.results);
        },
        render: function () {
            var self = this;

            this.setElement(this.template(this.model));
            this.listenTo(context, 'report post render', function() {
                self.renderChart();
            });
            return this;
        },
        renderChart: function() {
            var self = this,
                $heatmap = this.$('.heatmap');

            var width = $heatmap.width();

            var dataValues = _.values(this.model.results.accounts),
                rowLabels = _.keys(this.model.results.accounts),
                colLabels = this.model.results.categories,
                numOfRows = rowLabels.length,
                numOfCols = colLabels.length;

            var rectWidth = width / numOfCols,
                rectHeight = rectWidth,
                height = rectHeight * numOfRows;

            var svg = d3.select(this.$('svg')[0]);

            svg.attr('width', width).attr('height', height);

            var heatmap = svg.selectAll('g')
                                .data(dataValues)
                            .enter()
                                .append('g');

            heatmap.attr('transform', function(d, i) {
                return 'translate(0 ' + (rectHeight * i) + ')';
            });

            var rect = heatmap.selectAll('rect')
                    .data(function(d) { return d; })
                .enter()
                    .append('rect');

            rect.attr('width', rectWidth)
                .attr('height', rectHeight)
                .attr('stroke', '#cccccc')
                .attr('stroke-width', '1px')
                .attr('fill', function(d) {
                    return d.classification;
                })
                .attr('x', function(d, i) {
                    return rectWidth * i;
                });

            rect.append('title').text(function(d) {
                return d.label + ' - ' + ((d.value !== null) ? d.value : 'N/A');
            });
        }
    });
});