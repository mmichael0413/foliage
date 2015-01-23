define(function(require) {
	var BaseEntryDetailsView = require('pennyPacker/views/entry/details'),

		TravelDetails = {
			template: 'pennyPacker/entry/travel_details'
		};

	return BaseEntryDetailsView.extend(TravelDetails);
});