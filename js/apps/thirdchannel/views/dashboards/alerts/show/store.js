define(function(require) {
    var AlertRowView = require('thirdchannel/views/store_profile/alert_row_view'),
        OpenAlertsDetails = require('thirdchannel/views/store_profile/open_alerts_details'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return AlertRowView.extend({
        tagName: 'div',
        className: 'item pure-g alert-row',
        subViewClass: OpenAlertsDetails,
        template: HandlebarsTemplates['thirdchannel/dashboards/alerts/show/store'],
        initialize: function (options) {
            this.model = options.model;
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
});


