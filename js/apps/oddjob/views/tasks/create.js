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

		/**
		 *	Compares a trackable data collection and marks the 
		 *	item that matches the model's subject id as being sellected
		 * 
		 * @param  {collection} collection [description]
		 * @param  {string} idField    [description]
		 */
		markSelected: function (collection, idField) {
			var cursor = collection.length,
				subject = this.model.get('subject');
			while(cursor--) {
				if (subject && collection[cursor][idField] == subject.uuid) {
					collection[cursor].selected = true;
				}
			}
			
		},

		buildData: function () {
			//this.model.set('types', context.taskTypes);
			var surveys = SurveysStore.toJSON(),
				activityPackets = ActivityPacketStore.toJSON(),
				data = this.model.toJSON(),
				types = JSON.parse(JSON.stringify(context.taskTypes));

			
			if (!data.type) {
				data.type = types[0];
			}


			if (data.type.id == types[0].id){
				data.trackableItems = surveys;
				this.markSelected(surveys, "uuid");
				types[0].selected = true;
			} else if (data.type.id == types[1].id) {
				data.trackableItems = activityPackets;
				this.markSelected(activityPackets, "id");
				types[1].selected = true;
			}
			data.types = types;
			
			return data;
		},

		clear: function (e) {
			e.preventDefault();
			this.remove();
		}

	};

	return Backbone.View.extend(TaskCreateView);
});