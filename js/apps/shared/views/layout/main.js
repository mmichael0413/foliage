define(function(require) {
	var NavigationView = require('shared/views/layout/navigation'),
		ActionButtonView = require('shared/views/layout/action_buttons');

	return  {
		init: function () {
            if (window.report_pdf !== true) {
                new NavigationView();
            }

			new ActionButtonView();
		}
	};
});
