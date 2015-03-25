define(function(require) {
	var Backbone = require('backbone'),
		Handlebars = require('handlebars'),
		HandlebarsTemplates = require('handlebarsTemplates'),
		context = require('context'),
		ScheduleCollection = require('procrastination/collections/schedule/main'),
		StoreSchedule = require('procrastination/views/schedule/show');

	return Backbone.View.extend({
		el: '.section',
		template: HandlebarsTemplates['procrastination/schedule/list'],

		initialize: function() {
			this.aggregate = bootstrap.aggregateId;
			this.collection = new ScheduleCollection({
				aggregateId: this.aggregate,
				personId: bootstrap.personId,
				programId: bootstrap.programId
			});
			return this;
		},
		events: {
			'click .save-schedule': 'saveSchedule'
		},
		render: function() {
			var self = this;
			this.$el.append(this.template());
			// if collection has models, render them
			_.each(this.collection.models, function() {
				self.renderModel.apply(self, arguments);
			});

			return this;
		},
		fetch: function() {
			var self = this;
			this.collection.fetch().done(function() {
				self.render();
			});
		},
		renderModel: function(model) {
			var storeSchedule = new StoreSchedule({
				model: model
			});

			this.$('.schedule-container').append(storeSchedule.render().el);
		},
		saveSchedule: function(e) {
			e.preventDefault();
			e.stopPropagation();

			console.log('save the schedule');

		}
	});
});