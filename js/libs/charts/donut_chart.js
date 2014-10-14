define(function(require) {
    var $ = require('jquery'),
        Charts = require('libs/Chart');

    return function (node, dataArray, opts) {
        var options = _.extend({
            segmentShowStroke: false,
            percentageInnerCutout: 65,
            showPercentage: false,
            showImage: false,
            animation: false,
            legendColors: {'Yes': '#3FB586', 'No': '#d6d6d6', 'Maybe': 'red'}
        }, opts);

        var data = [];

        $.each(dataArray, function (key, value) {
            data.push({value: value, color: options.legendColors[key]});
        });

        new Chart(node.getContext("2d")).Doughnut(data, options);
    };
});
