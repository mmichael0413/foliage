define(function (require) {
	var Backbone = require('backbone'),
		$ = require('jquery'),
		jui = require('jquery-ui'),
		context = require('context'),
		GroupRow = require('oddjob/views/groups/row');


	return Backbone.View.extend({
		// assumes jobs / job groups have been fetched
		// 
		el: "#jobsContainer",
		rowsViews: [],
		render: function () {
			context.stores.groups.fetch()
			.done(function (data) {
					this.$el.html("");
					this.renderRows(context.stores.groups);
			}.bind(this));
		},
		renderRows: function (collection) {
			collection.each(function(group) {
				var view = new GroupRow({model: group});
				view.render().$el.appendTo(this.$el);
				this.rowsViews.push(view);
			}.bind(this));
			$('.group').sortable({
				connectWith: ".group"
			});

		}
	});
});