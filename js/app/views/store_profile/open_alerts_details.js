define(function(require) {
	var AsyncDetailsView = require('app/views/shared/async_details_view'),
		template = require('handlebarsTemplates')['store_profile/open_alert_details'],

			/**
			 * 
			 * @exports app/views/store_profile/open_alerts_details
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

				resolve: function () {
					// todo, submit notes
				}
				/*
            resolveAlert: function (e) {
                e.stopPropagation();
                e.preventDefault();

                var tokens = e.currentTarget.href.split("/"),
                    $link = this.$el.find(e.currentTarget),
                    id = tokens[tokens.length-1],
                    self = this,
                    tracker = this.collection.get(id);
                // put the change, then reset the collection with the results
                tracker.url = e.currentTarget.href;
                tracker.set({resolved: true});
                
                $link.parent().html("<i class='fa fa-spin fa-spinner'></i>");
                tracker.save()
                    .done(function () {
                        context.trigger('filter:query', "");
                    })
                    .fail(function () {
                        self.html("There is a problem. Please contact Tech Support");                            
                    });
            }
            */

			});
		return OpenAlertsDetailsView;
});