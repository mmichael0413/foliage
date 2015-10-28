define(function (require) {
	var Backbone = require('backbone'),
		context = require('context');

	/**
	 * This is a little odd. This collection is meant to be a singleton with also some controller functionality
	 * 
	 */
	var SurveysStore = function () {
		return new (Backbone.Collection.extend({
			url: function () {
				return context.links.surveys;
			}
		}))();
	};
	return SurveysStore();
	
});