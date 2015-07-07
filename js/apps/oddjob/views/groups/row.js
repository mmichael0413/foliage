define(function(require) {
	var Backbone = require('backbone'),
		Templates = require('handlebarsTemplates'),
		JobRowView = require('oddjob/views/jobs/row');
	
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
			this.renderRows(new Backbone.Collection(this.model.get('jobs')));
			return this;
		},

		renderRows: function (collection) {
			collection.each(function (job) {
				var view = new JobRowView({model: job});
				view.render().$el.appendTo(this.$el);
				this.jobViews.push(view);
			}.bind(this));
		}

	});
	return GroupsRowView;
});
