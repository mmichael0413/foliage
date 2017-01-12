define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        OverviewView = require('thirdchannel/views/store_profile/sales/overview'),
        BreakdownView = require('thirdchannel/views/store_profile/sales/breakdown'),
        ChartBreakdowns = require('thirdchannel/views/store_profile/sales/chart_breakdowns');

    var View = Backbone.View.extend({
        events: {
            'click .prev-quarter': 'prevQuarter',
            'click .next-quarter': 'nextQuarter'
        },

        initialize: function() {
            this.accountData = this.model.get('account');
            this.storeData = this.model.get('store');
            this.categories = this.model.get('categories');
        },

        render: function() {
            this.renderOverview();
            this.renderCharts();
            if (this.model.get('view_sales_overview_breakdown')) {
              this.renderOverviewBreakdown();
            }
            this.renderBrandsBreakdown();
            return this;
        },

        renderOverview: function() {
            var data = _.omit(this.storeData, 'brands', 'categories');
            data.current_year = this.model.get('current_year');
            data.current_time_period = this.model.get('current_time_period');
            data.accountSalesInCents = this.accountData.salesInCents;
            data.accountSalesChange = this.accountData.salesChange;

            new OverviewView({el: this.$('#overview'), model: new Backbone.Model(data)}).render();
        },

        renderCharts: function() {
            var view = new ChartBreakdowns({el: this.$('#chart-breakdowns'), model: this.model});
            view.render();
        },

        renderOverviewBreakdown: function() {
            var self = this;
            var accountSalesChange = this.accountData.salesChange;

            var model = new Backbone.Model({brand: 'Total Sales'});
            model.breakdowns = new Backbone.Collection();

            model.breakdowns.add(new Backbone.Model(_.extend(_.omit(this.storeData, 'brands', 'categories'), {label: 'Total Sales', accountSalesChange: accountSalesChange})));

            _.each(this.categories, function(category) {
                var data = this.storeData.categories[category];
                var categoryAccountSalesChange = null;
                if (data) {
                    if(this.accountData.categories[category] !== undefined && this.accountData.categories[category] !== undefined) {
                        categoryAccountSalesChange = this.accountData.categories[category].salesChange;
                    }
                    model.breakdowns.add(_.extend(data, {label: self._translateLabel(category), accountSalesChange: categoryAccountSalesChange}));
                }
            }.bind(this));

            var view = new BreakdownView({config: {title: 'Breakdown', sales_data_logos: this.model.get('sales_data_logos')}, el: this.$('#overview-breakdown'), collection: new Backbone.Collection([model])});
            view.render();
        },

        renderBrandsBreakdown: function() {
            var self = this;
            var brands = _.map(this.storeData.brands, function(data, brand) {
                var accountSalesChange = null,
                    accountBrandData = this.accountData.brands[brand];

                if(accountBrandData !== undefined) {
                    accountSalesChange = accountBrandData.salesChange;
                }

                var model = new Backbone.Model({brand: brand});
                model.breakdowns = new Backbone.Collection();

                var breakdownData = _.extend(_.omit(data, this.categories), {label: brand, accountSalesChange: accountSalesChange});
                model.breakdowns.add(new Backbone.Model(breakdownData));

                _.each(this.categories, function(c) {
                    var categoryAccountSalesChange = null;

                    if(accountBrandData !== undefined && accountBrandData[c] !== undefined) {
                        categoryAccountSalesChange = accountBrandData[c].salesChange;
                    }

                    var categoryData = data[c];
                    if (categoryData) {
                        model.breakdowns.add(_.extend(categoryData, {label: self._translateLabel(c), accountSalesChange: categoryAccountSalesChange}));
                    }
                });

                return model;
            }.bind(this));

            var view = new BreakdownView({config: {title: this._breakdownLabel(), sales_data_logos: this.model.get('sales_data_logos')}, el: this.$('#brands-breakdown'), collection: new Backbone.Collection(brands)});
            view.render();
        },

        prevQuarter: function(e) {
            e.preventDefault();
            this._updateSalesData(this.model.get('prev_quarter').begin);
        },

        nextQuarter: function(e) {
            e.preventDefault();
            this._updateSalesData(this.model.get('next_quarter').begin);
        },

        _updateSalesData: function(date) {
            this.model.set('date', date);
            this.model.fetch().then(function(resp) {
                context.router.navigate(this.model.url());
                this.accountData = this.model.get('account');
                this.storeData = this.model.get('store');
                this.render();
            }.bind(this));
        },
        _breakdownLabel: function() {
            var label = this.model.get('breakdown_by');
            if(label) {
                label = label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();
            }
            return label;
        },
        _translateLabel: function(label) {
            if(label === 'man') {
                label = "Men's";
            } else if(label === 'woman') {
                label = "Women's";
            }


            //Title Case the labels
            return label.split(' ').map(function(s){
                return s.length <=1 ? s.toUpperCase() : s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
            }).join(" ");
        }
    });

    return View;
});
