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

			setQueryString: function (qs) {
				this.queryString = qs + "&format=json";
			},
			parse: function (data) {
				if (data.count) {
					this.count = data.count;
				}
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