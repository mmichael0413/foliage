define(function(require){
	var Backbone = require('backbone'),
	context = require('context'),

	Schedule = Backbone.Model.extend({
		initialize: function(){

		},
		url: function(){
			return context.base_url + '/schedule/create';
		}
	});


	return Schedule;
});