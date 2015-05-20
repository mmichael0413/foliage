define(function(require) {

	var context = require('context'),
		_ = require('underscore'),
		$ = require('jquery'),
		Filter = require('thirdchannel/views/filter/main'),
		//SalesCompareView = require('thirdchannel/views/labs/sales_compare'),
		//MetaInfoView = require('thirdchannel/views/labs/sc/meta'),
		SalesCompareSideView = require('thirdchannel/views/labs/sc/side'),
		TopSkusView = require('thirdchannel/views/labs/top_skus');


	var main = {
		init: function () {
			_.extend(context, window.bootstrap);
		},

		skus: function () {
			this.init();
			Filter.init();
			new TopSkusView();
		},
		salesCompare: function () {
			this.init();
			Filter.init();
			new SalesCompareSideView({el: $(".left"), groupSelect: $("#firstCompare")});
			new SalesCompareSideView({el: $(".right"), groupSelect: $("#secondCompare")});
			context.trigger('filter:request');
		}
	};

	return main;

});