define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        DashboardsAlertsAlertsView = require('app/views/dashboards/alerts/index/alerts');

    return Backbone.View.extend({
        className: 'section',
        template: HandlebarsTemplates.section,
        initialize: function (options) {
            this.options = options;
            this.model = options.model;
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.find('table').append(new DashboardsAlertsAlertsView({programId: this.options.programId, id: this.model.get('id')}).render().$el);
            return this;
        }
    });
});


