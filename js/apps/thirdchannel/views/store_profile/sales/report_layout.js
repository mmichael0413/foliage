define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        BrandsBreakdownView = require('thirdchannel/views/store_profile/sales/brands_breakdown');

    var View = Backbone.View.extend({

        // TODO: setup events for QTD changes

        render: function() {
            this.renderBrandsBreakdown();
            return this;
        },

        renderBrandsBreakdown: function() {
            var storeData = this.model.get('store');

            var brands = _.map(storeData.brands, function(data, brand) {
                var model = new Backbone.Model({brand: brand});
                model.breakdowns = new Backbone.Collection();

                var breakdownData = _.extend(_.omit(data, 'man', 'woman', 'none'), {label: brand});
                model.breakdowns.add(new Backbone.Model(breakdownData));

                _.each(['man', 'woman', 'none'], function(g) {
                    var genderData = data[g];
                    model.breakdowns.add(_.extend(genderData, {label: g}));
                });

                return model;
            });

            var view = new BrandsBreakdownView({el: this.$('#brands-breakdown'), collection: new Backbone.Collection(brands)});
            view.render();
        }
    });

    return View;
});