define(function(require) {
	var 
		TeamsListView = require('app/views/teams/list'),
        Filter = require('app/views/filter/main');

	return {
		init: function () {
			// requires that a bootstrap set of json data be placed on the window
            new TeamsListView().renderCollection(window.bootstrap);
            Filter.init();
		}
	};
});