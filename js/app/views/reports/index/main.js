define(function(require) {
    var $ = require('jquery'),
        ExportView = require('app/views/utils/export_button'),
        ReportView = require('app/views/reports/index/report');

    return {
        init: function (options) {
            $(".actions .export").each(function(){
                new ExportView(options).render(this);
            });
            new ReportView(options).render();
        }
    };
});