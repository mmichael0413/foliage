define(function(require) {
  var $ = require('jquery'),
    ReportBreakdownView = require('thirdchannel/views/reports/breakdown/show/breakdown_list');

  return {
    init: function (options) {
      new ReportBreakdownView(options).render();
    }
  };
});