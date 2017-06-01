define(function(require) {
  var $ = require('jquery'),
    ReportBreakdownView = require('thirdchannel/views/reports/breakdown/show/breakdown_list'),
	Filter = require('thirdchannel/views/filter/main');

  return {
    init: function (options) {
      new ReportBreakdownView(options).render();
      Filter.init();
    }
  };
});