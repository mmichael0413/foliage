define(function(require) {
	var AsyncDetailsView = require('app/views/shared/async_details_view'),
		template = require('handlebarsTemplates')['store_profile/resolved_alert_details'],

			/**
			 * Used to display a resolved alert's details
			 * 
			 * @exports app/views/store_profile/open_alerts_details
			 */
			ResolvedAlertsDetailsView = AsyncDetailsView.extend({
				template: template,
				events: {
					'click .reopen': 'reopen',
					'click .cancel': 'cancel'
				},
				cancel: function () {
					this.trigger('details:close');
				}
			});
		return ResolvedAlertsDetailsView;
});