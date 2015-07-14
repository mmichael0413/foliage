define(function(require) {
	var Backbone = require('backbone'),
		Templates = require('handlebarsTemplates'),
		JobRowView = require('oddjob/views/tasks/row');
	
	var GroupsRowView = Backbone.View.extend({

		className: 'group section',
		jobViews: [],
		events: {
			"sortstart": "sortstart"
		},

		sortstart: function () {
			console.log("In group for sorting:", this.model.get('id'));
		},

		render: function () {
			// render myself, then add in any subViews
			// do I need a view for this?
			var data = this.model.toJSON();
			data.taskCount = data.tasks.length;
			data.displayTotalPayment = data.totalPayment/100;
			// render my self
			this.$el.html(Templates['oddjob/jobs/row'](data));
			// render my rows
			this.renderRows(new Backbone.Collection(this.model.get('tasks')));
			return this;
		},

		renderRows: function (collection) {
			var $tasksContainer = this.$el.find('.tasks-container');
			collection.each(function (job) {
				var view = new JobRowView({model: job});
				view.render().$el.appendTo($tasksContainer);
				this.jobViews.push(view);
			}.bind(this));
		}

	});
	return GroupsRowView;
});
