define(function(require){
	var Backbone = require('backbone'),
	context = require('context'),
	Schedule = require('procrastination/models/schedule/main');

	ScheduleCollection = Backbone.Collection.extend({
		initialize: function(options){
			this.aggregateId = options.aggregateId;
			this.personId = options.personId;
			this.programId = options.programId;
		},
		model: Schedule,
		url: function(){
			return context.base_url + '/schedule/list/' + this.aggregateId;
		}
	});


	return ScheduleCollection;
});