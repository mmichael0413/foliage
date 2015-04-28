define(function(require) {
	var Backbone = require('backbone'),
		context = require('context'),
		$ = require('jquery'),
		templates = require('handlebarsTemplates'),
		WidgetView = require('thirdchannel/views/reports/index/widget'),

		SalesCompareModel = Backbone.Model.extend({
			setQueryString: function (qs) {
				this.queryString = qs;
			},
			url: function () {
				return context.links.salesCompare.side +"?" + this.queryString;
			}
		}),

		/**
		 * Responsible for the rendering of one 'side's' worth of widgets
		 *  
		 * @type View
		 */
		SalesCompareSideView = Backbone.View.extend({
			initialize: function (opts) {
				if (opts.el === undefined) {
					throw "No 'el' parameter set in constructor for the SalesCompareSideView";
				}
				this.setElement($(opts.el));
				this.global = opts.global;
				this.$meta = this.$el.find('.meta');
				this.$widgetContainer = this.$el.find('.widget-container');
				this.loadingHTML = this.$meta.html();

				this.model = new SalesCompareModel();

				this.listenTo(context, "topStores:received", this.loadData);
				this.listenTo(this.model, "sync", this.render);
			},

			loadData: function (eventData) {
				this.$meta.html(this.loadingHTML);
				this.$widgetContainer.html("");
				var qs = eventData.queryString;
				if (this.global !== true) {
					qs = qs+"&uuids=" + eventData.uuids;
				} else {
					qs = qs+"&totalStores=" + eventData.totalStores;
				}
				this.model.setQueryString(qs);
				this.model.fetch()
					.fail(function () {
						console.log("ahhhh");
					});

			},

			render: function () {
				this._renderMeta();
				this._renderWidgets("Visual Merchandising", ["display", "moved", "currentPOP", "sharing", "otherBrands"]);
				//this._renderWidgets("Physical Footprint", ["fixtures", "damage", "visibility"]);
				this._renderWidgets("Physical Footprint", ["visibility"]);
				this._renderWidgets("Store Associate Education", ["educated", "educatedOn"]);
				this._renderWidgets("Customer Interactions", ["consumersSpoken", "sold", "retail"]);
				this._renderWidgets("Product Categories", ["categories"]);
				//fire the post render event to draw the canvas charts
				context.trigger("report post render");
				return this;
			},

			updateLinks: function (e) {
				e.preventDefault();
				e.stopPropagation();
				var $link = $(e.currentTarget),
					href = $link.attr("href");
				if (this.global !== true) {
					href = href + "&customer_store_id=" + this.model.get('report').customer_store_id;
				}
				window.location = "../" + href;
			},

			_renderMeta: function () {
				var data = {
					totalStores: this.model.get('totalStores'),
					states: this.model.get('report').states.results.count,
					averageUnits: this.model.get('report').averageProduct.results.count
				};
				this.$meta.html(templates['thirdchannel/labs/sales_compare/meta'](data));
			},

			_renderWidgets: function (title, keys) {
				var $template = $(templates['thirdchannel/labs/sales_compare/widget_section']({title: title})),
					i = 0,
					max = keys.length;
				for (i; i < max; i++) {
					$template.find('.widgets').append(new WidgetView(this.model.get('report')[keys[i]]).render().$el);
				}
				
				this.$widgetContainer.append($template);
				this.$widgetContainer.find(".breakdown-link").on("click", function (e) {
					this.updateLinks(e);
				}.bind(this));
			}
		});

	return SalesCompareSideView;
});