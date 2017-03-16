define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        ExportView = require('thirdchannel/views/utils/report_export_button'),
        ReportView = require('thirdchannel/views/reports/index/report'),
        FieldActivitiesReportView = require('thirdchannel/views/reports/field_activity/report'),
        Filter = require('thirdchannel/views/filter/main'),
        ReportExportModel = require('thirdchannel/models/reports/export');

    return {
        init: function (options) {

            var showFieldActivitesReport = true;

            $(".actions .export").each(function() {
                var data = {baseUrl: "/programs/" + options.programId + "/reports/export"};
                var model = new ReportExportModel(_.extend(data, options));
                new ExportView({model: model}).render(this);
            });
            Filter.init();

            if (showFieldActivitesReport) {
              new FieldActivitiesReportView(options).render();
            } else {
              new ReportView(options).render();
            }
        }
    };
});
