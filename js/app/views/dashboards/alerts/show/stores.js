define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        LoadingView = require('app/views/utils/loading'),
        PaginationView = require('app/views/utils/pagination'),
        DashboardsAlertsStoreModel = require('app/models/dashboards/alerts/store'),
        DashboardsAlertsStoresModel = require('app/models/dashboards/alerts/stores'),
        DashboardsAlertsStoreView = require('app/views/dashboards/alerts/show/store');

    return Backbone.View.extend({
        el: '.dashboard',
        template: HandlebarsTemplates.stores,
        initialize: function (options) {
            this.options = options;
            this.model = new DashboardsAlertsStoresModel({id: options.id});
            this.loadingView = new LoadingView();
        },
        render: function () {
            var self = this;
            this.$el.html(this.loadingView.render().$el);
            this.model.fetch({data: { page: this.options.page}, processData: true, success: function (model) {
                self.$el.html(self.template(model.toJSON()));
                self.addPages();
                var tbody = self.$el.find('tbody');
                _.each(model.get('stores'), function (subModel) {
                    tbody.append(new DashboardsAlertsStoreView({model: new DashboardsAlertsStoreModel(subModel)}).render().$el);
                });
            }});
            return this;
        },
        addPages: function () {
            this.$el.prepend(new PaginationView(this.model.get('pagination')).render().$el);
        }
    });
});


