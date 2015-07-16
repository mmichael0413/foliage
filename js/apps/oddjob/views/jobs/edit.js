define(function(require) {
	var Backbone = require('backbone'),
		Templates = require('handlebarsTemplates'),
		context = require('context'),
		SurveysStore = require('oddjob/stores/surveys');

	var JobEditView = {
		templateName: "oddjob/jobs/edit",
		taskViewClass: require('oddjob/views/tasks/edit'),
		
		


		renderChildViews: function () {
			console.log(this.model.get('tasks'));
			var i = 0,
				max = this.model.get('tasks').length;
			for(i; i < max; i++) {
				this._addTaskAtIndex(i, new Backbone.Model(this.model.get('tasks')[i]));
			}

		}

	};

	return require('oddjob/views/jobs/create').extend(JobEditView);
});