define(function (require) {
	var Backbone = require('backbone'),
		Templates = require('handlebarsTemplates'),
		context = require('context'),
		SurveysStore = require('oddjob/stores/surveys');

	/**
	 * 
	 * @type View
	 */
	var TaskCreateView = {
		templateName: 'oddjob/tasks/create',
		className: 'task clearfix',
		events: {
			'click .remove': 'clear'
		},

		render: function () {
			this.$el.html(Templates[this.templateName](this.buildData()));
			return this;
		},

		buildData: function () {
			var surveys = SurveysStore.toJSON(),
				pos = surveys.length;
			while(pos--) {
				if (surveys[pos].uuid == this.model.get('surveyId')) {
					surveys[pos].selected = true;
				}
			}
			this.model.set('surveys', surveys);

			return this.model.toJSON();
		},

		clear: function (e) {
			e.preventDefault();
			this.remove();
		}

	};

	return Backbone.View.extend(TaskCreateView);
});