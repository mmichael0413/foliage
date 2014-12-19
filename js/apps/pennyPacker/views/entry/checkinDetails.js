define(function(require) {
	var BaseEntryDetailsView = require('pennyPacker/views/entry/details'),

		CheckinDetails = {
			template: 'pennyPacker/entry/checkin_details'
		};

	return BaseEntryDetailsView.extend(CheckinDetails);
});