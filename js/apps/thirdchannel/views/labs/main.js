define(function(require) {

	var context = require('context'),
		_ = require('underscore'),
		$ = require('jquery'),
		Filter = require('thirdchannel/views/filter/main'),
		Chosen = require('chosen'),
		SalesComparisonSideView = require('thirdchannel/views/labs/sales_comparison/side');


	var main = {
		init: function () {
			_.extend(context, window.bootstrap);
		},
		
		salesCompare: function () {
			this.init();
			Filter.init();
			$('.labs.header select').chosen({disable_search: true, width: "100%"});
			new SalesComparisonSideView({el: $(".left"), groupSelect: $("#firstCompare")});
			new SalesComparisonSideView({el: $(".right"), groupSelect: $("#secondCompare")});
			context.trigger('filter:request');
		}
	};

	return main;

});