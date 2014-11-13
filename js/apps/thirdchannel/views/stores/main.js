define(function(require) {
	var StoreListView = require('app/views/stores/list'),
		Filter = require('app/views/filter/main');

	return {
		init: function () {
			// requires that a bootstrap set of json data be placed on the window
			new StoreListView().renderCollection(window.bootstrap);
			Filter.init();
		}
	};
});