define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        OverviewView = require('thirdchannel/views/store_profile/sales/overview'),
        BreakdownView = require('thirdchannel/views/store_profile/sales/breakdown');

    var View = Backbone.View.extend({

        // TODO: setup events for Quarter changes

        initialize: function() {
            this.accountData = this.model.get('account');
            this.storeData = this.model.get('store');
        },

        render: function() {
            this.renderOverview();
            this.renderOverviewBreakdown();
            this.renderBrandsBreakdown();
            return this;
        },

        renderOverview: function() {
            var data = _.omit(this.storeData, 'brands');

            data.accountSalesInCents = this.accountData.salesInCents;
            data.accountSalesChange = this.accountData.salesChange;

            new OverviewView({el: this.$('#overview'), model: new Backbone.Model(data)}).render();
        },

        renderOverviewBreakdown: function() {
            var accountSalesChange = this.accountData.salesChange;

            var model = new Backbone.Model({brand: 'Total Sales'});
            model.breakdowns = new Backbone.Collection();

            model.breakdowns.add(new Backbone.Model(_.extend(_.omit(this.storeData, 'brands', 'genders'), {label: 'Total Sales', accountSalesChange: accountSalesChange})));

            _.each(this.storeData.genders, function(data, gender) {
                var genderAccountSalesChange = null;

                if(this.accountData.genders[gender] !== undefined && this.accountData.genders[gender] !== undefined) {
                    genderAccountSalesChange = this.accountData.genders[gender].salesChange;
                }

                model.breakdowns.add(_.extend(data, {label: gender, accountSalesChange: genderAccountSalesChange}));
            }.bind(this));

            var view = new BreakdownView({title: 'Breakdown', el: this.$('#overview-breakdown'), collection: new Backbone.Collection([model])});
            view.render();
        },

        renderBrandsBreakdown: function() {
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
                    model.breakdowns.add(_.extend(genderData, {label: g, accountSalesChange: genderAccountSalesChange}));
                });

                return model;
            }.bind(this));

            var view = new BreakdownView({title: 'Brands', el: this.$('#brands-breakdown'), collection: new Backbone.Collection(brands)});
            view.render();
        }
    });

    return View;
});