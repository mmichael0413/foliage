define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        FieldActivitiesReportView = require('thirdchannel/views/reports/field_activity/report'),
        Filter = require('thirdchannel/views/filter/main');

    return {
        init: function (options) {
            Filter.init();
            new FieldActivitiesReportView(options).render();
        }
    };
});
