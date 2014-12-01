define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        Filter = require('app/views/filter/main'),
        LoadingView = require('app/views/utils/loading'),
        PaginationView = require('app/views/utils/pagination'),
        FilterCollection = require('app/collections/reports/info/filters'),
        InfoListModel = require('app/models/reports/info/info_list'),
        ReportInfoListItemView = require('app/views/reports/info/show/list_item');

    return Backbone.View.extend({
        el: ".report-info",
        template: HandlebarsTemplates['reports/info/show/info_list'],
        initialize: function (options) {
            this.model = new InfoListModel($.extend(options, {queryString: window.bootstrap}));
            this.filters = new FilterCollection(options);
            this.listenTo(context, 'filter:query', this.applyFilter);
            this.loadingView = new LoadingView();
        },
        render: function () {
            var self = this;
            this.$el.html(this.loadingView.render().$el);

            if(!context.instances.reportInfoFilters) {
                context.instances.reportInfoFilters = this.filters;
                this.filters.fetch({success: function (collection) {
                    self.addFilters(collection);
                }});
            }

            this.model.fetch({success: function (model) {
                self.constructView(model);
            }});
            return this;
        },
        addFilters: function (value) {
            Filter.init(value);
        },
        addPages: function (value) {
            this.$el.find('.pages').empty().append(new PaginationView(value).render().$el);
        },
        addListItem: function (value) {
            this.$el.find('.list-items').append(new ReportInfoListItemView(value).render().$el);
        },
        constructView: function (model) {
            this.$el.html(this.template(model.toJSON()));
            this.addPages(model.get('pages'));
            if (model.get('list_items').length > 0) {
                var that = this;
                $.each(model.get('list_items'), function (key, value) {
                    that.addListItem(value);
                });
            } else {
                this.$el.find('.list-items').append(HandlebarsTemplates.no_results);
            }
            this.loadingView.remove();
        },
        applyFilter: function (qs) {
            var self = this;
            this.$el.empty();
            this.$el.append(this.loadingView.render().$el);
            this.model.queryString = qs;
            this.model.fetch({success: function (model) {
                self.$el.find('.report-info-list').remove();
                self.constructView(model);
            }});
        }
    });
});