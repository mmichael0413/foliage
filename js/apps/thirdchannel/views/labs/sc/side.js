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
				if (opts.groupSelect === undefined) {
					throw "No 'groupSelect' parameter set in constructor for the SalesCompareSideView";
				}
				this.$groupSelect = opts.groupSelect;
				// this.setElement($(opts.el));
				// this.global = opts.global;
				// this.$meta = this.$el.find('.meta');
				// this.$widgetContainer = this.$el.find('.widget-container');
				this.loadingHTML = this.$el.find(".loader")[0];
				this.model = new SalesCompareModel();

				//this.listenTo(context, "topStores:received", this.loadData);
				this.listenTo(context, 'filter:query', this.applyFilter);
				this.listenTo(this.model, "sync", this.render);
				console.log("ready");
				return this;
			},



			applyFilter: function (qs) {
				//this.$meta.html(this.loadingHTML);
				//this.$widgetContainer.html("");
				this.$el.html(this.loadingHTML);
				// if (this.global !== true) {
				// 	qs = qs+"&uuids=" + eventData.uuids;
				// } else {
				// 	qs = qs+"&totalStores=" + eventData.totalStores;
				// }
				qs = qs + "&group=" + encodeURIComponent(this.$groupSelect.val());
				this.model.setQueryString(qs);
				this.model.fetch()
					.fail(function () {
						
					});

			},

			render: function () {
				this._renderMeta();
				this._renderWidgets("Visual Merchandising", ["averageBackstock", "averageBackstockMoved", "currentPOP", "whyNoPop", "sharing", "otherBrands"]);
				this._renderWidgets("Physical Footprint", ["visibility", "presenceChange"]);
				this._renderWidgets("Store Associate Education", ["educatedOn", "knowledgeable", "enthused"]);
				this._renderWidgets("Customer Interactions", ["averageEducated", "averageConsumersSpoken", "averageSold"]);
				this._renderWidgets("Product Categories", ["categories"]);
				this._renderWidgets("Competitive Landscape", ["brands", "sunglassBrands", "repsCalling"]);
				this._renderWidgets("Store Associate Product Feedback", ["agentsDiscussion", "receptiveManager"]);
				this._renderWidgets("Field Rep Presence", ["fmrPresent"]);
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
					averageUnits: Math.floor(Number(this.model.get('report').averageProduct.results))
				};
				this.$meta.html(templates['thirdchannel/labs/sales_compare/meta'](data));
			},

			
			_renderWidgets: function (title, keys, fn) {
				var $template = $(templates['thirdchannel/labs/sales_compare/widget_section']({title: title})),
					report = this.model.get('report'),
					i = 0,
					max = keys.length;
				for (i; i < max; i++) {
					$template.find('.widgets').append(new WidgetView(report[keys[i]]).render().$el);
				}
				// execute the optional callback
				if (fn !== undefined) {
					fn($template, report);
				}
				
				this.$widgetContainer.append($template);
				this.$widgetContainer.find(".breakdown-link").on("click", function (e) {
					this.updateLinks(e);
				}.bind(this));
			}
		});

	return SalesCompareSideView;
});