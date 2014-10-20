define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        Filter = require('app/views/filter/main'),
        LoadingView = require('app/views/utils/loading'),
        PaginationView = require('app/views/utils/pagination'),
        DashboardsAlertsStoreModel = require('app/models/dashboards/alerts/store'),
        DashboardsAlertsStoresModel = require('app/models/dashboards/alerts/stores'),
        DashboardsAlertsFiltersCollection = require('app/collections/dashboards/alerts/filters'),
        DashboardsAlertsStoreView = require('app/views/dashboards/alerts/show/store');

    return Backbone.View.extend({
        el: '.dashboard',
        template: HandlebarsTemplates['dashboards/alerts/show/stores'],
        initialize: function (options) {
            this.options = options;
            this.model = new DashboardsAlertsStoresModel({id: options.id});
            this.filters = new DashboardsAlertsFiltersCollection({id: options.id});
            this.loadingView = new LoadingView();
            this.listenTo(context, 'filter:query', this.applyFilter);
        },
        render: function () {
            var self = this;
            this.$el.html(this.loadingView.render().$el);

            this.filters.fetch({success: function (collection) {
                self.addFilters(collection);
            }});

            this.model.fetch({data: { page: this.options.page}, processData: true, success: function (model) {
                self.constructView(model);
            }});
            return this;
        },
        constructView: function(model) {
            var self = this;
            this.$el.html(self.template(model.toJSON()));
            this.addPages();
            var tbody = this.$el.find('tbody');
            _.each(model.get('stores'), function (subModel) {
                tbody.append(new DashboardsAlertsStoreView({model: new DashboardsAlertsStoreModel(subModel)}).render().$el);
            });
        },
        addPages: function () {
            this.$el.prepend(new PaginationView(this.model.get('pagination')).render().$el);
        },
        addFilters: function (value) {
            //new FiltersView({filters: value}).render();
            Filter.init(value);
        },
        applyFilter: function (qs) {
            var that = this;
            this.$el.empty();
            this.$el.append(this.loadingView.render().$el);
            this.model.queryString = qs;
            this.model.fetch({success: function (model) {
                that.constructView(model);
            }});
        }
    });
});


