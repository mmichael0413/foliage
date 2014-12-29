define(function(require) {
	var BaseEntryDetailsView = require('pennyPacker/views/entry/details'),

		DirectDetails = {
			template: 'pennyPacker/entry/direct_details'
		};

	return BaseEntryDetailsView.extend(DirectDetails);
});