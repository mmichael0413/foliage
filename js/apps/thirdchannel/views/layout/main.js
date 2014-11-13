define(function(require) {
	var NavigationView = require('app/views/layout/navigation');

	return  {
		init: function () {
			new NavigationView();
		}
	};
});