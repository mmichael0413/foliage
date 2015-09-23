define(function(require) {
    var $ = require('jquery'),
        ExportView = require('thirdchannel/views/utils/report_export_button'),
        ExportModel = require('thirdchannel/models/reports/export'),
        ReportInfoView = require('thirdchannel/views/reports/info/show/info_list');

    return {
        init: function (options) {
            $(".actions .export").each(function() {
                var data = {baseUrl: '/programs/' + options.programId + "/reports/" + options.reportId + "/info/" + options.infoId + "/export"};
                var model = new ExportModel(_.extend(data, options));
                new ExportView({model: model}).render(this);
            });
            new ReportInfoView(options).render();
        }
    };
});