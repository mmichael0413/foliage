define(function(require) {
  var $ = require('jquery'),
      _ = require('underscore'),
      ReportBreakdownView = require('thirdchannel/views/reports/breakdown/show/breakdown_list'),
      Filter = require('thirdchannel/views/filter/main'),
      ExportView = require('thirdchannel/views/utils/report_export_button'),
      ExportModel = require('thirdchannel/models/reports/export');

  return {
    init: function (options) {
      $('.actions .export').each(function() {
          var data = {
            baseUrl: '/programs/' + options.programId + '/reports/field_activities/breakdown/' + options.type + '/export'
          };
          var model = new ExportModel(_.extend(data, options));
          new ExportView({ model: model }).render(this);
      });
      new ReportBreakdownView(options).render();
      Filter.init();
    }
  };
});