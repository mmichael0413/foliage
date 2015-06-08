define(function (require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        CostEstimateView = {
            el: '#cost-estimates',
            template: Templates['procrastination/admin/cost_estimate'],
            initialize: function() {
                this.listenTo(this.model, 'change', this.render);
            },
            render: function() {
                this.$el.html(this.template(this.model.attributes));
            }
        };


    return Backbone.View.extend(CostEstimateView);
});