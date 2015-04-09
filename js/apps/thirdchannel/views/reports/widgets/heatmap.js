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

            // default row and col margins
            this.rowLabelMargin = 125;
            this.colLabelMargin = 130;

            // Build the legend collection (dealing with hstore -> json weirdness)
            this.model.config.legend = JSON.parse(this.model.config.legend);

            _.each(this.model.config.legend, function(key, i) {
               legend[key] = self.model.config.legendColors[i];
            });

            this.model.config.legend = legend;

            this.loadingView = new LoadingView();

            if(window.pdf === undefined) {
                this.listenTo(context, 'report post render', _.debounce(function() {
                    self.loadingView.remove();
                    self.renderChart();
                }, 500));
            } else {
                this.listenTo(context, 'report post render', function() {
                    self.renderChart();
                });
            }
            
            var xScale = null,
                xAxis = null,
                yScale = null,
                yAxis = null;

            $(window).resize(self.resizeChart);
        },
        render: function () {
            this.setElement(this.template(this.model));

            if(window.pdf === undefined) {
                this.$('.heatmap').append(this.loadingView.render().el);
            }

            return this;
        },
        renderChart: function() {
            var self = this,
                $heatMap = this.$('.heatmap'),
                width = $heatMap.width();

            var dataValues = this.model.results.values,
                rowLabels = this.model.results.accounts,
                colLabels = this.model.results.categories,
                numOfRows = rowLabels.length,
                numOfCols = colLabels.length;

            var svg = d3.select(this.$('svg')[0]);

            var labels = svg.selectAll('text')
                            .data(colLabels)
                            .enter()
                                .append('text')
                                .classed('label-text', true)
                                .text(function(d) { return d; });

            this.colLabelMargin = d3.max(labels[0], function(el) { return (el).getBBox().width; });
            labels.remove();

            labels = svg.selectAll('text')
                        .data(rowLabels)
                        .enter()
                            .append('text')
                            .classed('label-text', true)
                            .text(function(d) { return d; });

            this.rowLabelMargin = d3.max(labels[0], function(el) { return (el).getBBox().width; });
            labels.remove();

            var rectWidth = (width - this.rowLabelMargin) / numOfCols,
                rectHeight = rectWidth,
                height = rectHeight * numOfRows;

            svg.attr('width', width + this.rowLabelMargin).attr('height', height + this.colLabelMargin);

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

            yScale = d3.scale.ordinal().domain(rowLabels).rangeBands([0, height]);
            yAxis = d3.svg.axis().scale(yScale).orient('right');

            svg.append('g').attr('class', 'y axis').attr('transform', 'translate(' + rectWidth * numOfCols + ' 0)').call(yAxis);

            xScale = d3.scale.ordinal().domain(colLabels).rangeBands([0, width - this.rowLabelMargin]);
            xAxis = d3.svg.axis().scale(xScale).orient('bottom');

            svg.append('g')
                .attr('class', 'x axis')
                .attr('transform', 'translate(0 ' + height + ')')
                .call(xAxis)
                .selectAll('text')
                    .attr('transform', 'translate(-15, 5) rotate(-90)')
                    .attr('fill', '#434748')
                    .style('text-anchor', 'end');
        },
        resizeChart: function() {
            var self = this,
                $heatMap = this.$('.heatmap'),
                width = $heatMap.width();

            var rowLabels = _.keys(this.model.results.accounts),
                colLabels = this.model.results.categories,
                numOfRows = rowLabels.length,
                numOfCols = colLabels.length;

            var rectWidth = (width - this.rowLabelMargin) / numOfCols,
                rectHeight = rectWidth,
                height = rectHeight * numOfRows;

            var svg = d3.select(this.$('svg')[0]);

            svg.attr('width', width).attr('height', height + this.colLabelMargin);

            svg.selectAll('rect.tile')
               .attr('width', rectWidth)
               .attr('height', rectHeight)
               .attr('x', function(d, i) {
                    return rectWidth * (i % numOfCols);
               });

            svg.selectAll('g.tile-row').attr('transform', function(d, i) { return 'translate(0 ' + (rectHeight * i) + ')'; });

            yScale.rangeBands([0, height]);
            xScale.rangeBands([0, width - this.rowLabelMargin]);

            svg.selectAll('.x.axis')
                .attr('transform', 'translate(0 ' + height + ')')
                .call(xAxis.orient('bottom'))
                .selectAll('text')
                    .attr('transform', 'translate(-15, 5) rotate(-90)')
                    .attr('fill', '#434748')
                    .style('text-anchor', 'end');

            svg.selectAll('.y.axis').attr('transform', 'translate(' + rectWidth * numOfCols + ' 0)').call(yAxis.orient('right'));
        }
    });
});