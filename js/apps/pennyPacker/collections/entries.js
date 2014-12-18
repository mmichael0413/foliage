define(function(require) {
	var Backbone = require('backbone'),
		context = require('context'),
		/**
		 * Represents the Entries tied to a specific Program
		 * @type {Collection}
		 */
		EntriesCollection = Backbone.Collection.extend({
			url: function () {
				return context.content.links.self;
			}
		});

	return EntriesCollection;

});