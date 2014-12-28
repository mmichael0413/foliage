define(function(require) {
	var context = require('context'),
		EntriesCollection = require('pennypacker/collections/entries'),

		InvalidEntriesCollection = {
			url: function () {
				if (this.queryString) {
					return context.content.links.invalid + "?" + this.queryString;
				} else {
					return context.content.links.invalid;
				}
				
			}
		};

	return EntriesCollection.extend(InvalidEntriesCollection);
});