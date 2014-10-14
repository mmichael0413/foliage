define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        FiltersView = require('app/views/utils/filters'),
        PaginationView = require('app/views/utils/pagination'),
        InfoListModel = require('app/models/reports/info/info_list'),
        ReportInfoListItemView = require('app/views/reports/info/show/list_item');

    return Backbone.View.extend({
        el: ".report-info",
        template: HandlebarsTemplates.reports_info_show_info_list,
        loadingTemplate: HandlebarsTemplates.loading,
        initialize: function (options) {
            this.model = new InfoListModel(options);
        },
        render: function () {
            var that = this;
            this.$el.append(this.loadingTemplate);
            this.model.fetch({success: function (model) {
                that.$el.append(that.template(model.toJSON()));
                that.addFilters(model.get('filters'));
                that.addPages(model.get('pages'));
                if (model.get('list_items').length > 0) {
                    $.each(model.get('list_items'), function (key, value) {
                        that.addListItem(that, value);
                    });
                } else {
                    that.$el.find('.list-items').append(HandlebarsTemplates.no_results);
                }
                that.$el.find('.loading-section').remove();
            }});
            return this;
        },
        addFilters: function (value) {
            new FiltersView({filters: value}).render();
        },
        addPages: function (value) {
            this.$el.find('.pages').append(new PaginationView(value).render().$el);
        },
        addListItem: function (that, value) {
            that.$el.find('.list-items').append(new ReportInfoListItemView(value).render().$el);
        }
    });
});