define(function(require) {
	var $ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		context = require('context'),
		HandlebarsTemplates = require('handlebarsTemplates'),
		serializeObject = require('serializeObject'),
		Schedule = require('thirdchannel/models/schedule/main');

	StoreProfileSchedule = Backbone.View.extend({
		el: '.schedule-container',
		template: HandlebarsTemplates['thirdchannel/store_profile/schedule/list'],
		initialize: function() {
			this.model = new Schedule({
				id: context.requestParameters[1]
			});
			

			//this.listenTo(this.model, 'change', this.resetSchedule);

			return this;
		},
		events: {
			'click .subitSchedule': 'updateSchedule'
		},
		init: function() {
			var self = this;
			this.model.fetch().done(function() {
				self.render();
			});
		},
		render: function() {
			this.$('.schedule-list').html(this.template(this.model.attributes));

			this.updateTotals();

			return this;
		},
		resetSchedule: function() {
			this.render();

			this.$('.message').html('<div class="alert info">Schedule successfully updated</div>');
		},
		resetFailed: function() {
			this.$('.message').html('<div class="alert error">We were unable to update the store schedule. Please try again.</div>');
		},
		updateTotals: function() {
			this.$('.core-visits').text(this.model.get('core_occurrences'));
			this.$('.additional-visits').text(this.model.get('additional_occurrences'));
			this.$('.total-visits').text(this.model.get('total_occurrences'));
		},
		updateSchedule: function(e) {
			e.preventDefault();
			e.stopPropagation();

			var form = this.$('form');
			var attrs = form.serializeObject();

			// update additional occurrences
			var updatedSchedule = [];
			var core_occurrences = 0,
				additional_occurrences = 0,
				total_occurrences = 0;

			_.each(this.model.get('schedule'), function(month) {
				// param keys
				var coreParam = month.month + '_core',
					additionalParam = month.month + '_additional';

				// form values
				var core_occurrence = parseInt(attrs[coreParam], 10);
				var additional_occurrence = parseInt(attrs[additionalParam], 10);
				var total = core_occurrence + additional_occurrence;

				// total values
				core_occurrences += core_occurrence;
				additional_occurrences += additional_occurrence;
				total_occurrences += total;

				updatedSchedule.push({
					month: month.month,
					occurrences: core_occurrence,
					additional_occurrences: additional_occurrence,
					total_occurrences: total
				});
			});

			this.model.set('schedule', updatedSchedule);
			this.model.set('core_occurrences', core_occurrences);
			this.model.set('additional_occurrences', additional_occurrences);
			this.model.set('total_occurrences', total_occurrences);

			var self = this;
			this.model.save().done(function() {
				self.resetSchedule();
			}).fail(function() {
				self.resetFailed();
			});



		}

	});

	return StoreProfileSchedule;
});