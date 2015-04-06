define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        d3 = require('d3'),
        context = require('context'),
        LoadingView = require('thirdchannel/views/utils/loading');

    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/heatmap'],
        initialize: function (options) {
            _.bindAll(this, 'renderChart', 'resizeChart');

            var self = this,
                legend = {};

            this.model = options;

            // Build the legend collection (dealing with hstore -> json weirdness)
            this.model.config.legend = JSON.parse(this.model.config.legend);

            _.each(this.model.config.legend, function(key, i) {
               legend[key] = self.model.config.legendColors[i];
            });

            this.model.config.legend = legend;

            this.loadingView = new LoadingView();

            this.listenTo(context, 'filter-toggled:complete', function() {
                setTimeout(function() {
                    self.loadingView.remove();
                    self.renderChart();
                }, 1000);
            });

            $(window).resize(self.resizeChart);
        },
        render: function () {
            this.setElement(this.template(this.model));
            this.$('.heatmap').append(this.loadingView.render().el);

            return this;
        },
        renderChart: function() {
            var self = this,
                $heatMap = this.$('.heatmap'),
                width = $heatMap.width();

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

            var heatMap = svg.selectAll('g')
                                .data(dataValues)
                            .enter()
                                .append('g');

            heatMap.attr('class', 'tile-row')
                   .attr('transform', function(d, i) { return 'translate(0 ' + (rectHeight * i) + ')'; });

            var rect = heatMap.selectAll('rect')
                    .data(function(d) { return d; })
                .enter()
                    .append('rect');

            rect.attr('class', 'tile')
                .attr('width', rectWidth)
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
        },
        resizeChart: function() {
            var self = this,
                $heatMap = this.$('.heatmap'),
                width = $heatMap.width();

            var rowLabels = _.keys(this.model.results.accounts),
                colLabels = this.model.results.categories,
                numOfRows = rowLabels.length,
                numOfCols = colLabels.length;

            var rectWidth = width / numOfCols,
                rectHeight = rectWidth,
                height = rectHeight * numOfRows;

            var svg = d3.select(this.$('svg')[0]);

            svg.attr('width', width).attr('height', height);

            svg.selectAll('rect.tile')
               .attr('width', rectWidth)
               .attr('height', rectHeight)
               .attr('x', function(d, i) {
                    return rectWidth * (i % numOfCols);
               });

            svg.selectAll('g.tile-row').attr('transform', function(d, i) { return 'translate(0 ' + (rectHeight * i) + ')'; });
        }
    });
});