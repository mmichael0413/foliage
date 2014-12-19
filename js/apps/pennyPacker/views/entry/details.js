define(function (require) {
	var Backbone = require('backbone'),
		Templates = require('handlebarsTemplates'),
		$ = require('jquery'),

		/**
		 * 
		 * @exports 'pennyPacker/views/details'
		 */
		BaseEntryDetailsView = Backbone.View.extend({
			template:'',

			initialize: function (options) {
				this.model = new (Backbone.Model.extend({
					url: options.url
				}))();
				console.log(this.model);
			},

			fetch: function() {
				
				var self = this;
				this.$el.html("<div class='status'><i class='fa fa-spin fa-spinner fa-2x'></div>");
				this.model.fetch()
				.done(function () {
					self.render();
				});
			},

			render: function () {
				this.$el.html(Templates[this.template]());
				return this;
			}

		});

	return BaseEntryDetailsView;

});