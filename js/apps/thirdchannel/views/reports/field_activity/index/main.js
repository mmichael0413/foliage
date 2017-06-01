define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        DateSliderView = require('thirdchannel/views/filter/dateSlider'),
        ExportView = require('thirdchannel/views/utils/report_export_button'),
        ExportModel = require('thirdchannel/models/reports/export'),
        FieldActivitiesReportView = require('thirdchannel/views/reports/field_activity/report'),
        Filter = require('thirdchannel/views/filter/main'),
        context = require('context');

    return {
        init: function (options) {
            $('.actions .export').each(function() {
                var data = { baseUrl: '/programs/' + options.programId + '/reports/field_activities/export' };
                var model = new ExportModel(_.extend(data, options));
                new ExportView({ model: model }).render(this);
            });
            this.filters = Filter.init();
            new FieldActivitiesReportView(options).render();
            new DateSliderView({el: '.date-slider-container', pageFilters: this.filters});
            context.trigger("report resize");
        }
    };
});
