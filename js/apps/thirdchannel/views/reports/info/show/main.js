define(function(require) {
    var $ = require('jquery'),
        ExportView = require('thirdchannel/views/utils/export_button'),
        ReportInfoView = require('thirdchannel/views/reports/info/show/info_list');

    return {
        init: function (options) {
            $(".actions .export").each(function(){
                new ExportView(options).render(this);
            });
            new ReportInfoView(options).render();
        }
    };
});