define(function(require) {
	var 
		TeamsListView = require('app/views/teams/list'),
		PaginatorView = require('app/views/utils/paginator'),
        //FilterView = require('app/views/filter/filterControl');
        Filter = require('app/views/filter/main');

	return {
		init: function () {
			// requires that a bootstrap set of json data be placed on the window
			//new TableView().collection.reset(window.bootstrap);
            //new PaginatorView({url: 'teams/pagination'});
            new TeamsListView();
            Filter.init();
		}
	};
});