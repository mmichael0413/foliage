define(function(require) {
	var Backbone = require('backbone'),
		/**
		 * A small view which is intended to fetch a model asynchronously, then render some template.
		 * Use Case: the details of an expanded row.
		 * 
		 * If no 'modelClass' is set by a subclass, whill expect a url in a data config during initialization, e.g.
		 *  new AsyncDetailsView({url: "http://www.myapi.com"})
		 * 
		 * @exports app/views/shared_async_details_view
		 */
		AsyncDetailsView = Backbone.View.extend({
			template: undefined,

			initialize: function (data) {
				// allows for a subclass to specifiy a model
				if (this.modelClass === undefined) {
					this.modelClass = Backbone.Model.extend({
						url: function () {
							return data.url;
						}
					});
				}
			},

			fetch: function () {
				var self = this;
				self.model = new self.modelClass();
				self.model.fetch()
					.done(function () {
						self.$el.html(self.template(self.model.toJSON()));
					});
			},

		});
	return AsyncDetailsView;
});