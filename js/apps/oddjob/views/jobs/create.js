define(function(require) {
	var Backbone = require('backbone'),
		_ 		= require('underscore'),
		Templates = require('handlebarsTemplates'),
		context = require('context'),
		SurveysStore = require('oddjob/stores/surveys');

	var JobCreateView = {
		el: "#job",
		templateName: "oddjob/jobs/create",
		taskViewClass: require('oddjob/views/tasks/create'),
		childViews: [],
		events: {
			'click .add-task': 'addTask',
			'click .delete': 'deleteJob'
		},

		render: function () {
			SurveysStore.fetch()
			.done(function () {
				var data = this.model.toJSON();
				data.roles = context.roles;
				_.each(data.roles, function (role) {
					if (role.id === data.role) {
						role.selected = true;
					}
				});
				this.$el.html(Templates[this.templateName](data));
				this.$tasksContainer = this.$el.find('.tasks-container');
				// create the first view
				this.renderChildViews();
			}.bind(this));
			
			
			
			
			return this;
		},

		renderChildViews: function () {
			this._addTaskAtIndex(0, new Backbone.Model());

		},

		_addTaskAtIndex: function (index, model) {
			var view = new this.taskViewClass({index:index, model: model});
			this.$tasksContainer.append(view.render().$el);
			this.childViews.push(view);
		},

		addTask: function (e) {
			e.stopPropagation();
			e.preventDefault();
			var index = this.$tasksContainer.find('.task').length;
			this._addTaskAtIndex(index, new Backbone.Model());
		},

		deleteJob: function () {
			// no op for create
		}

	};

	return Backbone.View.extend(JobCreateView);
});