define(function (require) {
	var Backbone = require('backbone'),
		Templates = require('handlebarsTemplates'),
		context = require('context'),
		ActivityPacketStore = require('oddjob/stores/activityPackets'),
		SurveysStore = require('oddjob/stores/surveys');

	/**
	 * 
	 * @type View
	 */
	var TaskCreateView = {
		templateName: 'oddjob/tasks/create',
		className: 'task row clearfix pure-g',
		events: {
			'click .remove': 'clear',
			'change #taskType': 'onTypeChange'
		},

		initialize: function (data) {
			this.model = data.model;
			this.model.set('index', data.index);
		},

		onTypeChange: function () {
			console.log("type changed! ", arguments);
		},

		render: function () {
			this.$el.html(Templates[this.templateName](this.buildData()));
			return this;
		},

		buildData: function () {
			this.model.set('types', context.taskTypes);
			var surveys = SurveysStore.toJSON(),
				activityPackets = ActivityPacketStore.toJSON(),
				pos = surveys.length,
				data = this.model.toJSON();

			if (!data.type) {
				data.type = context.taskTypes[0]
			}

			
			// while(pos--) {
			// 	if (surveys[pos].uuid == this.model.get('surveyId')) {
			// 		surveys[pos].selected = true;
			// 	}
			// }
			// this.model.set('surveys', surveys);
			// this.model.set('activityPackets', activityPackets);
			



			// return this.model.toJSON();
			return data;
		},

		clear: function (e) {
			e.preventDefault();
			this.remove();
		}

	};

	return Backbone.View.extend(TaskCreateView);
});