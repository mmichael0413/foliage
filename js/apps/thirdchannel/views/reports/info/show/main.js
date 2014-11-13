define(function(require) {
    var $ = require('jquery'),
        ExportView = require('app/views/utils/export_button'),
        ReportInfoView = require('app/views/reports/info/show/info_list');

    return {
        init: function (options) {
            $(".actions .export").each(function(){
                new ExportView(options).render(this);
            });
            new ReportInfoView(options).render();
        }
    };
});