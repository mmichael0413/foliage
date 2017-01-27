define(function (require) {
	var Backbone = require('backbone');

	return Backbone.Model.extend({
		url: "/entries/e3b21d2c-bb78-4e08-815f-acb0668caf6a/invalidate?format=json&typeClassName=Travel&begin=Fri%20Jan%2001%202016&valid=true&max=0",
		defaults: {
			"title": "Invalidate all travel payments?",
			"warning": "Are you sure you want to invalidate all travel payments?  This action cannot be undone!",
			"validationText": "Invalidate Travel",
			"submitText": "Invalidate Travel"
		}
	});
});
