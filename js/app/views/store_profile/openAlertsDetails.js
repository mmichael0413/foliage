define(function(require) {
	var Backbone = require('backbone'),
		template = require('handlebarsTemplates')['store_profile/open_alert_details'],

			/**
			 * 
			 * @exports app/views/store_profile/openAlertsDetails
			 */
			OpenAlertsDetailsView = Backbone.View.extend({
				events: {
					'click .submit': 'resolve',
					'click .cancel': 'cancel'
				},

				initialize: function (data) {
					this.model = new (Backbone.Model.extend({
						url: function () {
							return data.url;
						}
					}))();
				},

				fetch: function () {
					var self = this;
					self.model.fetch()
						.done(function () {
							self.$el.html(template(self.model.toJSON()));
						});
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