define(function(require) {
    var $ = require('jquery'),
        ExportView = require('thirdchannel/views/utils/export_button'),
        ReportView = require('thirdchannel/views/reports/index/report');

    return {
        init: function (options) {
            $(".actions .export").each(function(){
                new ExportView(options).render(this);
            });
            new ReportView(options).render();
        }
    };
});