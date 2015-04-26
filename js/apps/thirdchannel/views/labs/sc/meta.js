define(function(require) {
	var Backbone = require('backbone'),
		context = require('context'),

		SalesMetaModel = Backbone.Model.extend({
			url: function () {
				return context.links.salesCompare.meta + "?" + this.queryString;
			}
		}),

		/**
		 * Responsible for accessing and displaying meta information on both sides
		 * of the sales comparison view, regarding the number stores involved, among other things.
		 * 
		 * 
		 * @type {[type]}
		 */
		SalesMetaInfoView = Backbone.View.extend({
			el: ".content",

			initialize: function () {
				this.$left = this.$el.find(".left .meta");
				this.$right = this.$el.find(".right .meta");
				this.loadingHTML = this.$left.html();
				this.model = new SalesMetaModel();
				this.listenTo(context, "topStores:received", this.requestMetaInfo);
				this.listenTo(this.model, "sync", this.render);
				
			},

			requestMetaInfo: function (message) {
				this.$left.html(this.loadingHTML);
				this.$right.html(this.loadingHTML);
				this.model.queryString = "uuids="+message.uuids +"&totalStores=" + message.totalStores;
				this.model.fetch();
			},

			render: function () {
				this.$left.html("<p>" + this.model.get('topStores') +"</p>");
				this.$right.html("<p>" + this.model.get('totalStores') +"</p>");
			}

		});

	return SalesMetaInfoView;
});