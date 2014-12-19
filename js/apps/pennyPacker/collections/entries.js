define(function(require) {
	var Backbone = require('backbone'),
		context = require('context'),
		Entry = require('pennyPacker/models/entry'),
		/**
		 * Represents the Entries tied to a specific Program
		 * @type {Collection}
		 */
		EntriesCollection = Backbone.Collection.extend({
			model: Entry,
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
				if (this.queryString) {
					return context.content.links.self + "?" + this.queryString;
				} else {
					return context.content.links.self;
				}
				
			}
		});

	return EntriesCollection;

});