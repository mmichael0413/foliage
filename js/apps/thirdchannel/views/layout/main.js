define(function(require) {
	var NavigationView = require('thirdchannel/views/layout/navigation');

	return  {
		init: function () {
            if (window.pdf !== true) {
                new NavigationView();
            }
		}
	};
});