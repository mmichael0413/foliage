define(function(require) {
	var TableView = require('app/views/stores/table'),
		PaginatorView = require('app/views/utils/paginator');

	return {
		init: function () {
			// requires that a bootstrap set of json data be placed on the window
			new TableView().collection.reset(window.bootstrap);
			new PaginatorView({url: 'stores/pagination'});
		}
	};
});