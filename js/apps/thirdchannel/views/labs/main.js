define(function(require) {

	var context = require('context'),
		_ = require('underscore'),
		$ = require('jquery'),
		Filter = require('thirdchannel/views/filter/main'),
		SalesComparisonSideView = require('thirdchannel/views/labs/sales_comparison/side');


	var main = {
		init: function () {
			_.extend(context, window.bootstrap);
		},
		
		salesCompare: function () {
			this.init();
			Filter.init();

			new SalesComparisonSideView({el: $(".left"), groupSelect: $("#firstCompare")});
			new SalesComparisonSideView({el: $(".right"), groupSelect: $("#secondCompare")});
			context.trigger('filter:request');
		}
	};

	return main;

});