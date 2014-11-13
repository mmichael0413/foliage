define(function(require) {
	var 
		TeamsListView = require('thirdchannel/views/teams/list'),
        Filter = require('thirdchannel/views/filter/main');

	return {
		init: function () {
			// requires that a bootstrap set of json data be placed on the window
            new TeamsListView().renderCollection(window.bootstrap);
            Filter.init();
		}
	};
});