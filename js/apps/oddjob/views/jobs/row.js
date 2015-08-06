define(function(require) {
	var Backbone = require('backbone'),
		Templates = require('handlebarsTemplates'),
		TaskRowView = require('oddjob/views/tasks/row');
	
	var JobRowView = Backbone.View.extend({

		className: 'job section',
		jobViews: [],

		render: function () {
			// render myself, then add in any subViews
			// do I need a view for this?
			var data = this.model.toJSON();
			data.taskCount = data.tasks.length;
			data.displayTotalPayment = data.totalPayment/100;

			data.createScheduleUrl = context.links.base +"/" + this.model.get('id') +"/schedule";
			data.editUrl = context.links.base +"/" + this.model.get('id');
			if (data.role === "") {
				data.role = undefined;
			}
			
			// render my self
			this.$el.html(Templates['oddjob/jobs/row'](data));
			// render my rows
			this.renderRows(new Backbone.Collection(this.model.get('tasks')));
			return this;
		},

		renderRows: function (collection) {
			var $tasksContainer = this.$el.find('.tasks-container');
			collection.each(function (job) {
				var view = new TaskRowView({model: job});
				view.render().$el.appendTo($tasksContainer);
				this.jobViews.push(view);
			}.bind(this));
		}

	});
	return JobRowView;
});
