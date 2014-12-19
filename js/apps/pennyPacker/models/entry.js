define(function (require) {
	var Backbone = require('backbone'),
		/**
		 * 
		 * 
		 * @exports 'pennyPacker/models/entry'
		 */
		EntryModel = Backbone.Model.extend({
			parse: function (data) {
				if (data.items) {
					return data.items[0];
				} else {
					return data;
				}

			},
			url: function () {
				return this.get('links').self;
			}
		});
	return EntryModel;
});