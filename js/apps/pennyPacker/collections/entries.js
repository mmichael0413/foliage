define(function(require) {
	var Backbone = require('backbone'),
		context = require('context'),
		/**
		 * Represents the Entries tied to a specific Program
		 * @type {Collection}
		 */
		EntriesCollection = {
			url: function () {
				return context.content.links.self;
			}
		};

	return Backbone.Collection.extend(EntriesCollection);

});