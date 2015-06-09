define(function (require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        CostEstimateView = {
            el: '#cost-estimates',
            template: Templates['procrastination/admin/cost_estimate'],
            loadingHTML: "<i class='fa fa-spin fa-spinner'></i>",
            initialize: function() {
                _.bindAll(this, 'render');
            },
            render: function() {
                this.$el.html(this.template(this.model.attributes));
            },
            fetch: function() {
                this.$el.html(this.loadingHTML);
                this.model.fetch().done(this.render);
            }
        };

    return Backbone.View.extend(CostEstimateView);
});