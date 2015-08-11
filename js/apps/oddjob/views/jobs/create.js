define(function(require) {
	var Backbone = require('backbone'),
		_ = require('underscore'),
		Templates = require('handlebarsTemplates'),
		context = require('context'),
		TaskCreateView = require('oddjob/views/tasks/create'),
		SurveysStore = require('oddjob/stores/surveys');

	var JobCreateView = {
		el: "#job",
		templateName: "oddjob/jobs/create",
		taskViewClass: TaskCreateView, // the class to use when instantiate existing tasks from the server
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
			this._addTaskAtIndex(0, this.taskViewClass, new Backbone.Model());

		},

		_addTaskAtIndex: function (index, taskClass, model) {
			var view = new taskClass({index:index, model: model});
			this.$tasksContainer.append(view.render().$el);
			this.childViews.push(view);
		},

		addTask: function (e) {
			e.stopPropagation();
			e.preventDefault();
			var index = this.$tasksContainer.find('.task').length;
			this._addTaskAtIndex(index, TaskCreateView, new Backbone.Model());
		},

		deleteJob: function () {
			// no op for create
		}

	};

	return Backbone.View.extend(JobCreateView);
});