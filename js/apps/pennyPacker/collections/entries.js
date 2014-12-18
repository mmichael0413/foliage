define(function(require) {
	var Backbone = require('backbone'),
		context = require('context'),
		/**
		 * Represents the Entries tied to a specific Program
		 * @type {Collection}
		 */
		EntriesCollection = Backbone.Collection.extend({
			queryString: "",
			parse: function (data) {
				if (data.items) {
					this.pages = data.pages;
					return data.items;
				} else {
					return data;
				}
			},
			url: function () {
				return context.content.links.self + "?" + this.queryString;
			}
		});

	return EntriesCollection;

});