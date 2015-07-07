define(function (require) {
	var Backbone = require('backbone'),
		context = require('context'),
		Templates = require('handlebarsTemplates');

	return Backbone.View.extend({
		className: "job",
		events: {
			'click': 'edit'
		},

		edit: function () {
			console.log("Editing ", this.model.get('id'));
		},

		render: function () {
			this.$el.html(Templates['oddjob/jobs/row'](this.model.toJSON()));
			return this;
		}
	});
});