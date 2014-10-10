namespace("ThirdChannel.views");

ThirdChannel.views.ReportInfoListItemView = Backbone.View.extend({
    template: HandlebarsTemplates['app/templates/reports/info/show/list_item'],
    initialize: function (options) {
        this.model = options;
    },
    events: {
        "click .info-toggle": "toggleCheckins"
    },
    render: function () {
        var that = this;
        this.setElement(this.template(this.model));
        if (this.model.checkins !== undefined) {
            $.each(this.model.checkins, function(key, value){
                that.addCheckin(that, value);
            });
        }
        return this;
    },
    addCheckin: function (that, value) {
        var checkin = new ThirdChannel.views.ReportInfoListCheckinView(value);
        that.$el.last().find('td').append(checkin.render().$el);
    },
    toggleCheckins: function (e, data) {
        this.$el.last().toggleClass('hide');
        this.$el.find('.fa').toggleClass('fa-rotate-180');
    }
});