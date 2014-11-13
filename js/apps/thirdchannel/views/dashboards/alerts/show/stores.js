define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        Filter = require('app/views/filter/main'),
        LoadingView = require('app/views/utils/loading'),
        PaginationView = require('app/views/utils/pagination'),
        StoreModel = require('app/models/dashboards/alerts/store'),
        StoresModel = require('app/models/dashboards/alerts/stores'),
        FiltersCollection = require('app/collections/dashboards/alerts/show/filters'),
        StoreView = require('app/views/dashboards/alerts/show/store');

    return Backbone.View.extend({
        el: '.dashboard',
        template: HandlebarsTemplates['dashboards/alerts/show/stores'],
        initialize: function (options) {
            this.options = options;
            this.model = new StoresModel({programId: options.programId, id: options.id, queryString: window.bootstrap});
            this.filters = new FiltersCollection({programId: options.programId, id: options.id});
            this.loadingView = new LoadingView();
            this.listenTo(context, 'filter:query', this.applyFilter);
            this.listenTo(context, 'filter:query:alerts', this.applyFilter);
        },
        render: function () {
            var self = this;
            this.$el.html(this.loadingView.render().$el);

            if(!context.instances.dashboardStoresFilters) {
                context.instances.dashboardStoresFilters = this.filters;
                this.filters.fetch({success: function (collection) {
                    self.addFilters(collection);
                }});
            }

            this.filters.fetch({success: function (collection) {
                self.addFilters(collection);
            }});

            this.model.fetch({data: { page: this.options.page}, processData: true, success: function (model) {
                self.constructView(model);
            }});
            return this;
        },

        constructView: function(model) {
            
            this.$el.html(this.template(model.toJSON()));
            this.addPages();
            var tbody = this.$el.find('.body');

            _.each(model.get('stores'), function (subModel) {
                tbody.append(new StoreView({model: new StoreModel(subModel)}).render().$el);
            });
        },
        addPages: function () {
            this.$el.prepend(new PaginationView(this.model.get('pagination')).render().$el);
        },
        addFilters: function (value) {
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


