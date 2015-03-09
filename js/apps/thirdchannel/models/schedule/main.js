define(function(require){
	var $ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		context = require('context');

	StoreSchedule = Backbone.Model.extend({
		url: function() {
			return '/programs/' + context.programId + '/stores/' + context.requestParameters[1] + '/schedule';
		}
	});

	return StoreSchedule;
});