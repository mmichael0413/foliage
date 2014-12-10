define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        AlertsView = require('thirdchannel/views/dashboards/alerts/index/alerts');

    return Backbone.View.extend({
        className: 'section',
        template: HandlebarsTemplates['thirdchannel/dashboards/alerts/index/section'],
        initialize: function (options) {
            this.options = options;
            this.model = options.model;
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.find('table').append(new AlertsView({programId: this.options.programId, id: this.model.get('id')}).render().$el);
            return this;
        }
    });
});


