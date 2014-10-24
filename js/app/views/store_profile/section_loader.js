define(function(require) {
		var templates = require('handlebarsTemplates'),
			_ = require('underscore');
	
	/**
	 * A base convenience view for handling the loading of a collection and rendering into a .store_profile_section
	 * 
	 * @exports app/views/store_profile/section_loader
	 */
	var SectionLoaderView = {

		collectionClass: undefined,
		rowsTemplate: "",
		failHTML: "<p>There was an error fetching the requested data. Please contact TechSupport</p>",


		initialize: function () {
			this.collection = new this.collectionClass();
		},

		render: function () {
			var self = this;
			self.collection.fetch()
				.done(function () {
					self.success.apply(self,arguments);
				})
				.fail(function () {
					self.failure.apply(self, arguments);
				});
		},

		success: function () {
			var data = {rows: this.collection.toJSON()};
			_.extend(data, this.additionalData());
			this.$el.find('.body').html(templates[this.rowsTemplate](data));
			this.afterRender();
		},

		afterRender: function () {},

		failure: function () {
			this.$el.find('.body').html(this.failHTML);
			this.afterRender();
		},
		/**
		 * Used by the subclassed Views to affix additional data into the object injected into the Handlebars Template.
		 * 
		 * @return {Object} A plain old Javascript object containing data to be include int the Template
		 */
		additionalData: function () {
			return {};
		}
	};
	
	return require('backbone').View.extend(SectionLoaderView);

});