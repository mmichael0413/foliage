define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        d3 = require('d3'),
        context = require('context'),
        LoadingView = require('thirdchannel/views/utils/loading');

    var maxRectWidth = 75;

    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/heatmap'],
        initialize: function (options) {
            this.model = options;

            // default row and col margins
            this.rowLabelMargin = 125;
            this.colLabelMargin = 130;
        },
        render: function () {
            if (_.size(this.model.results) > 0) {
                this.buildLegend();
                this.setElement(this.template(this.model));
                _.bindAll(this, 'renderChart', 'resizeChart', 'updateQueryString');
                this.listenTo(context, 'filter:queryString', this.updateQueryString);
                this.listenTo(context, 'report post render', this.renderChart);
                this.listenTo(context, 'report resize',      this.resizeChart);
                $(window).resize(this.resizeChart);
                context.trigger('filter:request:queryString');
            }
            return this;
        },
        renderChart: function() {
            if (this.chart === undefined) {
                var self = this,
                    $heatMap = this.$('.heatmap'),
                    width = $heatMap.width();

                var dataValues = this.model.results.values,
                    rowLabels = this.model.results.row_labels,
                    colLabels = this.model.results.col_labels,
                    numOfRows = rowLabels.length,
                    numOfCols = colLabels.length;

                var svg = d3.select(this.$('svg')[0]);

                var labels = svg.selectAll('text')
                    .data(colLabels)
                    .enter()
                    .append('text')
                    .classed('label-text', true)
                    .text(function (d) {
                        return d;
                    });

                this.colLabelMargin = d3.max(labels[0], function (el) {
                    return (el).getBBox().width;
                });
                labels.remove();

                labels = svg.selectAll('text')
                    .data(rowLabels)
                    .enter()
                    .append('text')
                    .classed('label-text', true)
                    .text(function (d) {
                        return d;
                    });

                this.rowLabelMargin = d3.max(labels[0], function (el) {
                    return (el).getBBox().width;
                });
                labels.remove();

                var _rectWidth = (width - this.rowLabelMargin) / numOfCols;

                var rectWidth = (_rectWidth > maxRectWidth ? maxRectWidth : _rectWidth),
                    rectHeight = rectWidth,
                    height = rectHeight * numOfRows;

                svg.attr('width', width + this.rowLabelMargin).attr('height', height + this.colLabelMargin);

                var heatMap = svg.selectAll('g')
                    .data(dataValues)
                    .enter()
                    .append('g');

                heatMap.attr('class', 'tile-row')
                    .attr('transform', function (d, i) {
                        return 'translate(0 ' + (rectHeight * i) + ')';
                    });

                var rect = heatMap.selectAll('rect')
                    .data(function (d) {
                        return d;
                    })
                    .enter()
                    .append('rect');

                rect.attr('class', 'tile')
                    .classed('clickable', this.model.show_view_list)
                    .attr('width', rectWidth)
                    .attr('height', rectHeight)
                    .attr('stroke', '#cccccc')
                    .attr('stroke-width', '1px')
                    .attr('fill', function (d) {
                        return d.classification;
                    })
                    .attr('x', function (d, i) {
                        return rectWidth * i;
                    });

                rect.append('title').text(function (d) {
                    return d.label + ' - ' + ((d.value !== null) ? d.value : 'N/A');
                });

                if (this.model.show_view_list) {
                    rect.on('click', function (d, i) {
                        var viewBreakDownLink = '/programs/Merchandising/reports/all/info/' + self.model.widget_id + '?' + this.queryString;

                        if (d.info_list_filters !== undefined) {
                            _.each(d.info_list_filters, function (val, param) {
                                viewBreakDownLink += '&' + param + '=' + val;
                            });
                        }

                        //context.router.navigate(viewBreakDownLink, {trigger: true});
                        // ugh...
                        window.location = viewBreakDownLink;
                    });
                }

                yScale = d3.scale.ordinal().domain(rowLabels).rangeBands([0, height]);
                yAxis = d3.svg.axis().scale(yScale).orient('right');

                svg.append('g').attr('class', 'y axis').attr('transform', 'translate(' + rectWidth * numOfCols + ' 0)').call(yAxis);

                xScale = d3.scale.ordinal().domain(colLabels).rangeBands([0, rectWidth * numOfCols]);
                xAxis = d3.svg.axis().scale(xScale).orient('bottom');

                this.chart = svg.append('g')
                    .attr('class', 'x axis')
                    .attr('transform', 'translate(0 ' + height + ')')
                    .call(xAxis)
                    .selectAll('text')
                    .attr('transform', 'translate(-15, 5) rotate(-90)')
                    .attr('fill', '#434748')
                    .style('text-anchor', 'end');
            }
        },
        resizeChart: function() {
            if (this.chart !== undefined) {
                var $heatMap = this.$('.heatmap'),
                    width = $heatMap.width();

                var rowLabels = this.model.results.row_labels,
                    colLabels = this.model.results.col_labels,
                    numOfRows = rowLabels.length,
                    numOfCols = colLabels.length;

                var _rectWidth = (width - this.rowLabelMargin) / numOfCols;

                var rectWidth = (_rectWidth > maxRectWidth ? maxRectWidth : _rectWidth),
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
                xScale.rangeBands([0, rectWidth * numOfCols]);

                svg.selectAll('.x.axis')
                    .attr('transform', 'translate(0 ' + height + ')')
                    .call(xAxis.orient('bottom'))
                    .selectAll('text')
                    .attr('transform', 'translate(-15, 5) rotate(-90)')
                    .attr('fill', '#434748')
                    .style('text-anchor', 'end');

                svg.selectAll('.y.axis').attr('transform', 'translate(' + rectWidth * numOfCols + ' 0)').call(yAxis.orient('right'));
            }
        },
        buildLegend: function() {
            var self = this,
                legend = {};

            // Build the legend collection (dealing with hstore -> json weirdness)
            this.model.config.legend = JSON.parse(this.model.config.legend);

            _.each(this.model.config.legend, function(key, i) {
                legend[key] = self.model.config.legendColors[i];
            });

            this.model.config.legend = legend;
        },
        updateQueryString: function(qs) {
            this.queryString = qs;
        }
    });
});