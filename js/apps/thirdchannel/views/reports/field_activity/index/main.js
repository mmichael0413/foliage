define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        ExportView = require('thirdchannel/views/utils/report_export_button'),
        FieldActivitiesReportView = require('thirdchannel/views/reports/field_activity/report'),
        Filter = require('thirdchannel/views/filter/main'),
        ReportExportModel = require('thirdchannel/models/reports/export');

    return {
        init: function (options) {

            $(".actions .export").each(function() {
                var data = {baseUrl: "/programs/" + options.programId + "/reports/export"};
                var model = new ReportExportModel(_.extend(data, options));
                new ExportView({model: model}).render(this);
            });
            Filter.init();

            new FieldActivitiesReportView(options).render();
        }
    };
});
