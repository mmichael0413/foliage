define(function (require) {
	var Backbone = require('backbone'),
		context = require('context'),

		ProgramStoresStore = function () {
		return new (Backbone.Collection.extend({
			initialize: function () {
				//todo: listeners?
			},
			parse: function (data) {
				this.count = data.count;
				this.limit = data.limit;
				this.offset = data.offset;
				return data.programStores;
			},
			url: function () {
				return context.links.stores;
			}
		}))();
	};
	return ProgramStoresStore();



});