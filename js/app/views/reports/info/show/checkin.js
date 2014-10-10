namespace("ThirdChannel.views");

ThirdChannel.views.ReportInfoListCheckinView = Backbone.View.extend({
    template: HandlebarsTemplates['app/templates/reports/info/show/checkin'],
    initialize: function (options) {
        this.model = options;
    },
    render: function () {
        this.setElement(this.template(this.model));
        return this;
    }
});