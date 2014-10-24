define(function (require) {
	var SectionLoaderView = require('app/views/store_profile/section_loader'),
		context = require('context'),
		Backbone = require('backbone'),

		AlertsTrackingView = {
			el: '#alerts',
			
			collectionClass: Backbone.Collection.extend({
				url: function () {
					return context.alerts.links.open;
				}
			}),
			
			rowsTemplate: 'store_profile/alerts_rows',
			
			additionalData: function () {
				return context.alerts;
			}
		};
	
	return SectionLoaderView.extend(AlertsTrackingView);

});