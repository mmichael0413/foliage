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
            this.setElement(this.template(this.model));
            this.listenTo(context, 'report post render', function() {
                this.renderChart();
            });
            return this;
        },
        renderChart: function() {
            var self = this,
                $heatmapContainer = this.$('.heatmap'),
                svg = $heatmapContainer.find('svg')[0];

            var numberOfCols = this.model.results.categories.length;
            var numberOfRows = _.keys(this.model.results.accounts).length;

            var width = $heatmapContainer.width();
            var rectWidth = width / numberOfCols,
                rectHeight = rectWidth;

            var height = rectHeight * numberOfRows;

            console.log('Width: ' + width);
            console.log('Height: ' + height);

            var heatmap = d3.select(svg);

            heatmap.attr('width', width)
                .attr('height', height);

            var data = _.flatten(_.values(this.model.results.accounts));

            heatmap.selectAll('rect')
                .data(data)
                .enter()
                    .append('rect')
                    .attr('stroke', '#cccccc')
                    .attr('stroke-width', '1px')
                    .attr('width', rectWidth)
                    .attr('height', rectHeight)
                    .attr('x', function(d, i) {
                        return rectWidth * (i % numberOfCols);
                    })
                    .attr('y', function(d, i) {
                        return rectHeight * (i - (i % numberOfCols)) / numberOfCols;
                    })
                    .attr('fill', function(d, i) {
                        return d.classification;
                    });
        }
    });
});