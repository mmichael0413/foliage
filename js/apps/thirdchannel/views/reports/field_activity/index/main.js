define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        DateSliderView = require('thirdchannel/views/filter/dateSlider'),
        FieldActivitiesReportView = require('thirdchannel/views/reports/field_activity/report'),
        Filter = require('thirdchannel/views/filter/main');

    return {
        init: function (options) {
            this.filters = Filter.init();
            new FieldActivitiesReportView(options).render();
            new DateSliderView({el: '.date-slider-container', pageFilters: this.filters});
        }
    };
});
