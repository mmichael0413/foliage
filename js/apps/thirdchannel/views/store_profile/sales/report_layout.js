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
        },

        render: function() {
            this.renderOverview();
            this.renderCharts();
            this.renderOverviewBreakdown();
            this.renderBrandsBreakdown();
            return this;
        },

        renderOverview: function() {
            var data = _.omit(this.storeData, 'brands', 'genders');
            data.current_year = this.model.get('current_year');
            data.current_quarter = this.model.get('current_quarter');
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

            model.breakdowns.add(new Backbone.Model(_.extend(_.omit(this.storeData, 'brands', 'genders'), {label: 'Total Sales', accountSalesChange: accountSalesChange})));

            _.each(['man', 'woman', 'none'], function(gender) {
                var data = this.storeData.genders[gender];
                var genderAccountSalesChange = null;

                if(this.accountData.genders[gender] !== undefined && this.accountData.genders[gender] !== undefined) {
                    genderAccountSalesChange = this.accountData.genders[gender].salesChange;
                }

                model.breakdowns.add(_.extend(data, {label: self._tranlateGenderLabel(gender), accountSalesChange: genderAccountSalesChange}));
            }.bind(this));

            var view = new BreakdownView({title: 'Breakdown', el: this.$('#overview-breakdown'), collection: new Backbone.Collection([model])});
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

                var breakdownData = _.extend(_.omit(data, 'man', 'woman', 'none'), {label: brand, accountSalesChange: accountSalesChange});
                model.breakdowns.add(new Backbone.Model(breakdownData));

                _.each(['man', 'woman', 'none'], function(g) {
                    var genderAccountSalesChange = null;

                    if(accountBrandData !== undefined && accountBrandData[g] !== undefined) {
                        genderAccountSalesChange = accountBrandData[g].salesChange;
                    }

                    var genderData = data[g];
                    model.breakdowns.add(_.extend(genderData, {label: self._tranlateGenderLabel(g), accountSalesChange: genderAccountSalesChange}));
                });

                return model;
            }.bind(this));

            var view = new BreakdownView({title: 'Brands', el: this.$('#brands-breakdown'), collection: new Backbone.Collection(brands)});
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

        _tranlateGenderLabel: function(label) {
            if(label === 'man') {
                label = "Men's";
            } else if(label === 'woman') {
                label = "Women's";
            }
            return label;
        }
    });

    return View;
});