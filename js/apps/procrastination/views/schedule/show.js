define(function(require) {
	var Backbone = require('backbone'),
		HandlebarsTemplates = require('handlebarsTemplates');

	ScheduleView = Backbone.View.extend({
		className: 'store-schedule',
		template: HandlebarsTemplates['procrastination/schedule/row'],
		initialize: function(options) {
			// model is passed in by list view
			this.model = options.model;
		},
		events: {
			"blur input": "updateScheduledDate"
		},
		render: function() {
			this.$el.html(this.template(this.model.attributes));

			return this;
		},
		updateScheduledDate: function(e) {
			e.preventDefault();
			e.stopPropagation();

			this.model.set('dateScheduled', $(e.target).val());

			console.log('I changed shit: ' + this.model.get('dateScheduled'));
			if (this.model.get('dateScheduled') !== undefined) {
				if (this.model.hasChanged('dateScheduled')) {
					this.model.save(this.model.attributes);
					console.log(this.model.attributes);
				}
			}
		}
	});

	return ScheduleView;
});