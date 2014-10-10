namespace("ThirdChannel.views");

ThirdChannel.views.ReportInfoListView = Backbone.View.extend({
    template: HandlebarsTemplates['app/templates/reports/info/show/info_list'],
    initialize: function (options) {
        this.model = options;
    },
    render: function () {
        var that = this;
        this.$el.html(this.template(this.model));
        this.addFilters(this.model.filters);
        this.addPages(this.model.pages);
        if (this.model.list_items.length > 0) {
            $.each(this.model.list_items, function(key, value){
                that.addListItem(that, value);
            });
        } else {
            that.$el.find('.list-items').append(HandlebarsTemplates['common/no_results']);
        }

        return this;
    },
    addFilters: function (value) {
        new ThirdChannel.views.FiltersView({filters: value}).render();
    },
    addPages: function (value) {
        this.$el.find('.pages').append(new ThirdChannel.views.PaginationView(value).render().$el);
    },
    addListItem: function (that, value) {
        var listItem = new ThirdChannel.views.ReportInfoListItemView(value);
        that.$el.find('.list-items').append(listItem.render().$el);
    }
});