define(function(require) {
	var StoreListView = require('app/views/stores/list'),
		PaginatorView = require('app/views/utils/paginator'),
		Filter = require('app/views/filter/main');

	return {
		init: function () {
			// requires that a bootstrap set of json data be placed on the window
			//new TableView().collection.reset(window.bootstrap);
			//new PaginatorView({url: 'stores/pagination'});
			new StoreListView().renderCollection(window.bootstrap);
			Filter.init();
		}
	};
});