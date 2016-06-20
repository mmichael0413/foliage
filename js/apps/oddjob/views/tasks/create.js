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

		onTypeChange: function (event) {
			this.model.set("type", $(event.currentTarget).val());
			this.render();
		},

		render: function () {
			this.$el.html(Templates[this.templateName](this.buildData()));
			return this;
		},

		buildData: function () {
			this.model.set('types', context.taskTypes);
			var surveys = SurveysStore.toJSON(),
				activityPackets = ActivityPacketStore.toJSON(),
				cursor,
				data = this.model.toJSON(),
				types = [
					{name: "Single Survey", selected: false, value: "SURVEY"},
					{name: "Fixture / POP Management", selected: false, value: "ACTIVITY_PACKET"}
				];

			console.log(this.model);
			cursor = surveys.length;
			while(cursor--) {
				if (surveys[cursor].uuid == this.model.get('trackableId')) {
					surveys[cursor].selected = true;
				}
			}

			cursor = activityPackets.length;
			while(cursor--) {
				if (this.model.get('subject') && activityPackets[cursor].id == this.model.get('subject').uuid) {
					activityPackets[cursor].selected = true;
				}
			}

			console.log("data type = ", data.type)
			if (!data.type) {
				data.type = types[0].value
			}
			if (data.type === types[0].name){ 
				data.type = types[0].value;
			} else if (data.type == types[1].name) {
				data.type = types[1].value;
			}


			if (data.type == types[0].value){
				data.trackableItems = surveys;
				types[0].selected = true;
			} else if (data.type == types[1].value) {
				data.trackableItems = activityPackets;
				types[1].selected = true;
			}
			data.types = types;
			//console.log("data types = ", data.types);

			/*
				What do we need?
				types

				list of items based on types.

				list of times


				... but we hve to iterate on each  and mark as selected

			 */
			
			return data;
		},

		clear: function (e) {
			e.preventDefault();
			this.remove();
		}

	};

	return Backbone.View.extend(TaskCreateView);
});