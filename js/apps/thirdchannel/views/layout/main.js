define(function(require) {
	var NavigationView = require('thirdchannel/views/layout/navigation');

	return  {
		init: function () {
			new NavigationView();
		}
	};
});