define(function(require) {

	var context = require('context'),
		_ = require('underscore'),
		//Backbone = require('backbone'),
		Filter = require('thirdchannel/views/filter/main'),
		TopSkusView = require('thirdchannel/views/labs/top_skus');


	var main = {
		init: function () {
			_.extend(context, window.bootstrap);
		},

		skus: function () {
			this.init();
			Filter.init();
			new TopSkusView();
		}
	};

	return main;



	
});