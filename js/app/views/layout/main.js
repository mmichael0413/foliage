define(function(require) {
	var NavigationView = require('app/views/layout/navigation'),
		FilterView = require('app/views/filter/filterControl');

	return  {
		init: function () {
			new NavigationView();
			new FilterView();
		}
	};
});