define(function(require) {
	var Backbone = require('backbone'),
		context = require('context'),
		templates = require('handlebarsTemplates'),

		TopSkusModel = Backbone.Model.extend({
			queryString: undefined,
			url: function () {
				if (this.queryString) {
					return context.links.topSkus.self + "?" + this.queryString;
				} else {
					return context.links.topSkus.self;    
				}
			}
		}),

		TopSkusView = {

			el: "#topSkus",
			loadingHTML: "<i class='fa fa-spin fa-spinner fa-4x'></i>",

			initialize: function () {
				this.model = new TopSkusModel();
				this.$body = this.$el.find('.body');
				this.listenTo(context, 'filter:query', this.applyFilter);
				this.listenTo(this.model, 'sync', this.render);

				// get the filter to trigger what it currently has, thus getting the model to listen and fetch. yay events
                context.trigger('filter:request');
			},

			applyFilter: function (qs) {
				this.model.queryString = qs;
				this.$body.html(this.loadingHTML);
                this.model.fetch();
			},

			render: function () {
				var report = {
                    data: this.model.toJSON()
                };

                this.$body.html(templates['thirdchannel/labs/top_sku_rows'](report.data));
				
			}

		};
	return Backbone.View.extend(TopSkusView);
});