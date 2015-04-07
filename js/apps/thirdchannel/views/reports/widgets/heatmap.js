define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        d3 = require('d3'),
        context = require('context'),
        LoadingView = require('thirdchannel/views/utils/loading');

    var rowLabelMargin = 125;
    var colLabelMargin = 125;

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

            var dataValues = _.values(this.model.results.accounts),
                rowLabels = _.keys(this.model.results.accounts),
                colLabels = this.model.results.categories,
                numOfRows = rowLabels.length,
                numOfCols = colLabels.length;

            var rectWidth = (width - rowLabelMargin) / numOfCols,
                rectHeight = rectWidth,
                height = rectHeight * numOfRows;

            var svg = d3.select(this.$('svg')[0]);

            svg.attr('width', width).attr('height', height + colLabelMargin);

            var heatMap = svg.selectAll('g')
                                .data(dataValues)
                            .enter()
                                .append('g');

            heatMap.attr('class', 'tile-row')
                   .attr('transform', function(d, i) { return 'translate(' + rowLabelMargin + ' ' + (rectHeight * i) + ')'; });

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

            svg.append('g').attr('class', 'y axis').attr('transform', 'translate(0 0)').call(yAxis);

            xScale = d3.scale.ordinal().domain(colLabels).rangeBands([rowLabelMargin, width]);
            xAxis = d3.svg.axis().scale(xScale).orient('top');

            svg.append('g')
                .attr('class', 'x axis')
                .attr('transform', 'translate(0 ' + (height + rowLabelMargin)  + ')')
                .call(xAxis)
                .selectAll('text')
                    .attr('dy', '1em')
                    .attr('transform', 'rotate(-90)')
                    .attr('fill', '#434748')
                    .style('text-anchor', 'start');
        },
        resizeChart: function() {
            var self = this,
                $heatMap = this.$('.heatmap'),
                width = $heatMap.width();

            var rowLabels = _.keys(this.model.results.accounts),
                colLabels = this.model.results.categories,
                numOfRows = rowLabels.length,
                numOfCols = colLabels.length;

            var rectWidth = (width - rowLabelMargin) / numOfCols,
                rectHeight = rectWidth,
                height = rectHeight * numOfRows;

            var svg = d3.select(this.$('svg')[0]);

            svg.attr('width', width).attr('height', height + colLabelMargin);

            svg.selectAll('rect.tile')
               .attr('width', rectWidth)
               .attr('height', rectHeight)
               .attr('x', function(d, i) {
                    return rectWidth * (i % numOfCols);
               });

            svg.selectAll('g.tile-row').attr('transform', function(d, i) { return 'translate(' + rowLabelMargin + ' ' + (rectHeight * i) + ')'; });

            yScale.rangeBands([0, height]);
            xScale.rangeBands([rowLabelMargin, width]);

            svg.selectAll('.x.axis')
                .attr('transform', 'translate(0 ' + (height + colLabelMargin) + ')')
                .call(xAxis.orient('top'))
                .selectAll('text')
                    .attr('dy', '1em')
                    .attr('transform', 'rotate(-90)')
                    .attr('fill', '#434748')
                    .style('text-anchor', 'start');
            svg.selectAll('.y.axis').call(yAxis.orient('right'));
        }
    });
});