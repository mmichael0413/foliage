define(function (require) {
	var SectionLoaderView = require('app/views/store_profile/section_loader'),
		context = require('context'),
		Backbone = require('backbone'),

		AlertsTrackingView = SectionLoaderView.extend({
			el: '#alerts',
			
			collectionClass: Backbone.Collection.extend({
				url: function () {
					return context.alerts.links.open;
				},
				parse: function (response) {
					this.count = response.count;
					return response.items;
				}
			}),
			
			rowsTemplate: 'store_profile/alerts_rows',
			
			additionalData: function () {
				return context.alerts;
			},
			afterRender: function () {
                this.$el.find('.counter').text(this.collection.count + " ");
            }
		});
	
	return AlertsTrackingView;

});