define(function(require) {
	var AsyncDetailsView = require('thirdchannel/views/shared/async_details_view'),
		template = require('handlebarsTemplates')['store_profile/open_alert_details'],
		context = require('context'),

			/**
			 * 
			 * @exports thirdchannel/views/store_profile/open_alerts_details
			 */
			OpenAlertsDetailsView = AsyncDetailsView.extend({
				template: template,
				events: {
					'click .submit': 'resolve',
					'click .cancel': 'cancel'
				},
				cancel: function () {
					this.trigger('details:close');
				},

				resolve: function (e) {
					// todo, submit notes
					// 
					e.stopPropagation();
					e.preventDefault();
					var self = this;
					this.model.set({notes: this.$el.find('.notes-input').val(), resolved: true});
					this.$el.html('<i class="fa fa-spin fa-spinner"></i>');
					
					this.model.save()
						.done(function () {
							// alert everything to requery... this has the benefit of 
							context.trigger('filter:query:alerts');
						})
						.fail(function () {
							self.$el.html("There is a problem. Please contact Tech Support");                            
						});
				}
			});
		return OpenAlertsDetailsView;
});