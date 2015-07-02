define(function(require) {
	var EntryListView = require('pennyPacker/views/entries/list');


	return EntryListView.extend({
		el: '#invalidEntries'
	});
	
});