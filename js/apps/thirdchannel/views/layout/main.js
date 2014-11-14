define(function(require) {
	var NavigationView = require('thirdchannel/views/layout/navigation'),
		ActionButtonView = require('thirdchannel/views/layout/action_buttons');

	return  {
		init: function () {
            if (window.pdf !== true) {
                new NavigationView();
            }

			new ActionButtonView();
		}
	};
});