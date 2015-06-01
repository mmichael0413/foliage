/*globals Chart */
define(function(require) {
	var Backbone = require('backbone'),
		context = require('context'),
		$ = require('jquery'),
		_ = require('underscore'),
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
				this.loadingHTML = this.$el.find(".loader")[0];
				this.model = new SalesCompareModel();
				
				//this.listenTo(this.$groupSelect, "change", this.changeGroup);
				this.$groupSelect.on('change', function () {
					//context.trigger('filter:request');
					this.applyFilter(this.currentQS);
				}.bind(this));
				this.listenTo(context, 'filter:query', this.applyFilter);
				this.listenTo(this.model, "sync", this.render);
				return this;
			},



			applyFilter: function (qs) {
				this.$el.html(this.loadingHTML);
				this.currentQS = qs;
				qs = qs + "&group=" + encodeURIComponent(this.$groupSelect.val());
				this.model.setQueryString(qs);
				this.model.fetch()
					.fail(function () {
						
					});

			},

			render: function () {
				this.$el.html("");
				this._renderMeta();
				this._renderSales();
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
					totalStores: this.model.get('report').totalStores,
					states: this.model.get('report').states.results.count,
					averageUnits: Math.floor(Number(this.model.get('report').averageProduct.results))
				};
				this.$el.append(templates['thirdchannel/labs/sales_compare/meta'](data));
			},

			_renderSales: function () {
				this.$el.append(templates['thirdchannel/labs/sales_compare/retail_sales']({sales: this.model.get('report').sales}));
				var ctx = this.$el.find('.retail-sales')[0].getContext("2d");
				this._buildChart(ctx, this.model.get('report').sales);

			},

			_buildChart: function (ctx, list) {
                this._formatCents(list);
                var labels = _.map(list, function (item) { return item.date; }),
                    points = _.map(list, function (item) { return item.rawUSD; }),
                    data = {
                        labels: labels,
                        datasets: [
                        {
                            label: "Test",
                            fillColor: "rgba(241,95,81,0.2)",
                            strokeColor: "rgba(241,95,81,1)",
                            pointColor: "rgba(241,95,81,1)",
                            pointStrokeColor: "#fff",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(220,220,220,1)",
                            data: points
                        }]
                    };
                new Chart(ctx).Line(data, {});
            },

            _formatCents: function (list) {
                var i = 0,
                    max = list.length;
                for (i; i < max; i++) {
                    list[i].rawUSD = Math.round(list[i].cents/100);
                }
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
				
				this.$el.append($template);
				this.$el.find(".breakdown-link").on("click", function (e) {
					this.updateLinks(e);
				}.bind(this));
			}
		});

	return SalesCompareSideView;
});