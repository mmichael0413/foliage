define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        d3 = require('d3'),
        ViewBreakdownLinkMixin = require('thirdchannel/views/reports/widgets/view_breakdown_link_mixin'),
        context = require('context'),
        LoadingView = require('thirdchannel/views/utils/loading');

    var maxRectWidth = 30;

    var view = Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/heatmap'],
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            if (_.size(this.model.results) > 0) {
                this.buildLegend();
                this.setElement(this.template(this.model));
                _.bindAll(this, 'renderChart', 'resizeChart', 'updateQueryString', 'openViewBreakdown');
                if (this.model.show_view_list !== undefined) {
                    this.listenTo(context, 'filter:queryString', this.updateQueryString);
                    context.trigger('filter:request:queryString');
                }
                if (this.model.uuid) {
                    this.listenTo(context, 'report post render widget_' + this.model.uuid, this.renderChart);
                } else {
                    this.listenTo(context, 'report post render', this.renderChart);
                }
            }
            return this;
        },
        renderChart: function() {
            if (this.chart === undefined) {
                this.heatmap = this.$('.heatmap');
                this.svg = d3.select(this.$('svg')[0]);
                this.config = {
                    numOfRows: this.model.results.row_labels.length,
                    numOfCols: this.model.results.col_labels.length,
                    padding: 15
                };

                this.xScale = d3.scale.ordinal().domain(this.model.results.col_labels);
                this.xAxisScale = d3.svg.axis().scale(this.xScale.rangeBands([0, 1]));
                this.xAxis = this.svg.append('g').attr('class', 'x axis').call(this.xAxisScale);
                this.config.colLabelMargin = this.xAxis.node().getBBox().width + this.config.padding;

                this.yScale = d3.scale.ordinal().domain(this.model.results.row_labels);
                this.yAxisScale = d3.svg.axis().scale(this.yScale.rangeBands([0, 1]));
                this.yAxis = this.svg.append('g').attr('class', 'y axis').call(this.yAxisScale);
                this.config.rowLabelMargin = this.yAxis.node().getBBox().width + this.config.padding;

                this.svg.selectAll('g.tile-row')
                    .data(this.model.results.values)
                    .enter()
                    .append('g')
                    .attr('class', 'tile-row')
                    .selectAll('rect')
                    .data(function (d) {
                        return d;
                    })
                    .enter()
                    .append('rect')
                    .attr('class', 'tile')
                    .classed('clickable', this.model.show_view_list)
                    .on('click', this.openViewBreakdown)
                    .attr('stroke', '#cccccc')
                    .attr('stroke-width', '1px')
                    .attr('fill', function (d) {
                        return d.classification;
                    });

                this.chart = true;
                this.resizeChart();
                this.$el.on('mresize', this.resizeChart);
            }
        },
        resizeChart: function() {
            if (this.chart !== undefined) {

                var rectLength = Math.max(Math.min(((this.heatmap.width() - this.config.rowLabelMargin) / this.config.numOfCols), maxRectWidth), 0),
                    rectsWidth = rectLength * this.config.numOfCols,
                    rectsHeight = rectLength * this.config.numOfRows,
                    svgWidth = rectsWidth + this.config.rowLabelMargin,
                    svgHeight = rectsHeight + this.config.colLabelMargin;

                this.svg.attr('width', svgWidth).attr('height', svgHeight)
                    .selectAll('g.tile-row')
                    .attr('transform', function (d, i) {
                        return 'translate(0 ' + (rectLength * i) + ')';
                    })
                    .selectAll('rect')
                    .attr('width', rectLength)
                    .attr('height', rectLength)
                    .attr('x', function (d, i) {
                        return rectLength * i;
                    });

                this.yAxisScale = this.yAxisScale.scale(this.yScale.rangeBands([0, rectsHeight])).orient('right');
                this.yAxis.attr('transform', 'translate(' + rectsWidth + ' 0)')
                          .call(this.yAxisScale);

                this.xAxisScale = this.xAxisScale.scale(this.xScale.rangeBands([0, rectsWidth])).orient('bottom');
                this.xAxis.attr('transform', 'translate(0 ' + rectsHeight + ')')
                          .call(this.xAxisScale)
                          .selectAll('text')
                          .attr('transform', 'translate(-15, 5) rotate(-90)')
                          .style('text-anchor', 'end');
            }
        },
        openViewBreakdown: function (data) {
            if (this.model.show_view_list) {
                var viewBreakDownLink = '/programs/Merchandising/reports/all/info/' + this.model.widget_id + '?' + this.queryString;

                if (data.info_list_filters !== undefined) {
                    _.each(data.info_list_filters, function (val, param) {
                        if ($.isArray(val)) {
                            _.each(val, function (arrayVal) {
                                viewBreakDownLink += '&' + param + '=' + arrayVal;
                            });
                        } else {
                            viewBreakDownLink += '&' + param + '=' + val;
                        }

                    });
                }

                window.open(viewBreakDownLink);
            }
        },
        buildLegend: function() {
            var legend = {};

            // Build the legend collection (dealing with hstore -> json weirdness)
            this.model.config.legend = JSON.parse(this.model.config.legend);

            _.each(this.model.config.legend, function(key, i) {
                legend[key] = this.model.config.legendColors[i];
            }, this);

            this.model.config.legend = legend;
        },
        updateQueryString: function(qs) {
            this.queryString = qs;
        }
    });
    _.extend(view.prototype, ViewBreakdownLinkMixin);
    return view;
});
