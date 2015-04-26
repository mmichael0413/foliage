define(function(require) {

	var context = require('context'),
		_ = require('underscore'),
		Filter = require('thirdchannel/views/filter/main'),
		SalesCompareView = require('thirdchannel/views/labs/sales_compare'),
		MetaInfoView = require('thirdchannel/views/labs/sc/meta'),
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
			new MetaInfoView();
			new SalesCompareView();
		}
	};

	return main;

});