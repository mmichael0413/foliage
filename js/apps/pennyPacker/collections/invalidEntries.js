define(function(require) {
	var context = require('context'),
		EntriesCollection = require('pennyPacker/collections/entries'),

		InvalidEntriesCollection = {
			url: function () {
				if (this.queryString) {
					return context.content.links.invalid + "?page=0&" + this.queryString;
				} else {
					return context.content.links.invalid;
				}
			}
		};

	return EntriesCollection.extend(InvalidEntriesCollection);
});