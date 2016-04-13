define(function(require) {
	var anchorTransition = require('thirdchannel/views/utils/anchor_transition');

	return {
		init: function () {
			anchorTransition(-65, 1000);
		}
	};
});