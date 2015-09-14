define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        ExportView = require('thirdchannel/views/utils/report_export_button'),
        ReportView = require('thirdchannel/views/reports/index/report'),
        ReportExportModel = require('thirdchannel/models/reports/export');

    return {
        init: function (options) {
            $(".actions .export").each(function() {
                var data = {baseUrl: "/programs/" + options.programId + "/reports/export"};
                var model = new ReportExportModel(_.extend(data, options));
                new ExportView({model: model}).render(this);
            });
            $(".actions .answers-export").each(function() {
                var data = {baseUrl: "/programs/" + options.programId + "/reports/exports/answers"};
                var model = new ReportExportModel(_.extend(data, options));
                new ExportView({model: model}).render(this);
            });
            new ReportView(options).render();
        }
    };
});