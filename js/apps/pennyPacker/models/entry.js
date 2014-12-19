define(function (require) {
	var Backbone = require('backbone'),
		/**
		 * 
		 * 
		 * @exports 'pennyPacker/models/entry'
		 */
		EntryModel = Backbone.Model.extend({
			url: function () {
				return this.get('links').self;
			}
		});
	return EntryModel;
});