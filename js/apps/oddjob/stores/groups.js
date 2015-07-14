define(function (require) {
	var Backbone = require('backbone'),
		context = require('context');

	/**
	 * This is a little odd. This collection is meant to be a singleton with also some controller functionality
	 * 
	 */
	var GroupsStore = function () {
		return new (Backbone.Collection.extend({
			initialize: function () {
				//todo: listeners?
			},
			url: function () {
				return context.links.jobs;
			}
		}))();
	};
	return GroupsStore();
	
});