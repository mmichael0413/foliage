define(function(require) {
	var $ = require('jquery'),
		SerializeObject = require('serializeObject'),
		ScheduleView = require('thirdchannel/views/store_profile/schedule'),
		context = require('context');

	describe("Open Schedule View", function() {
		var CALENDAR = [
			'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep','oct','nov','dec'
		]

		it('Should update schedule', function() {
			context.requestParameters = [];
			context.requestParameters.push('Merchandising', '7293');
			view = new ScheduleView();
			view.model.set('calendar', CALENDAR);
			view.model.set('core_occurrences', 0);
			view.model.set('additional_occurrences', 0);
			view.model.set('total_occurrences', 0);



			
			
           
		});
	});
});