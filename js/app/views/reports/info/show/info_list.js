define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        EventListener = require('app/utils/eventListener'),
        FiltersView = require('app/views/utils/filters'),
        LoadingView = require('app/views/utils/loading'),
        PaginationView = require('app/views/utils/pagination'),
        InfoListModel = require('app/models/reports/info/info_list'),
        ReportInfoListItemView = require('app/views/reports/info/show/list_item');

    return Backbone.View.extend({
        el: ".report-info",
        template: HandlebarsTemplates['reports/info/show/info_list'],
        initialize: function (options) {
            this.model = new InfoListModel(options);
            this.listenTo(EventListener, 'filter:query', this.applyFilter);
            this.loadingView = new LoadingView();
        },
        render: function () {
            var that = this;
            this.$el.append(this.loadingView.render().$el);
            this.model.fetch({success: function (model) {
                that.addFilters(model.get('filters'));
                that.constructView(model);
            }});
            return this;
        },
        addFilters: function (value) {
            new FiltersView({filters: value}).render();
        },
        addPages: function (value) {
            this.$el.find('.pages').append(new PaginationView(value).render().$el);
        },
        addListItem: function (value) {
            this.$el.find('.list-items').append(new ReportInfoListItemView(value).render().$el);
        },
        constructView: function (model) {
            this.$el.append(this.template(model.toJSON()));
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
            var that = this;
            this.$el.empty();
            this.$el.append(this.loadingView.render().$el);
            this.model.queryString = qs;
            this.model.fetch({success: function (model) {
                that.$el.find('.report-info-list').remove();
                that.constructView(model);
            }});
        }
    });
});