define(function(require) {
	var Backbone = require('backbone'),
		Templates = require('handlebarsTemplates'),
		context = require('context'),
		SurveysStore = require('oddjob/stores/surveys');

	var JobCreateView = {
		el: "#job",
		templateName: "oddjob/jobs/create",
		events: {
			'click .add-task': 'addTask'
		},

		render: function () {
			SurveysStore.fetch()
			.done(function () {
				
				var data = {
					job: this.model.toJSON(),
					surveys: SurveysStore.toJSON()
				};
				
				this.$el.html(Templates[this.templateName](data));
				// cache the Task Form html in order to recreate it
				this.taskHtml = this.$el.find('.tasks-container').first().html();
			}.bind(this));
			
			
			
			
			return this;
		},

		addTask: function (e) {
			e.stopPropagation();
			e.preventDefault();
			console.log("Duplicating, ", this.taskHtml);
			this.$el.find('.tasks-container').append(this.taskHtml);
		}

	};

	return Backbone.View.extend(JobCreateView);
});