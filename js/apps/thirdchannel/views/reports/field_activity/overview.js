define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        OverviewModel = require('thirdchannel/models/reports/field_activity/overview');
        KPIView = require('thirdchannel/views/reports/field_activity/KPI');


    return Backbone.View.extend({
      el: ".field-activities-overview",
      template: HandlebarsTemplates['thirdchannel/reports/field_activity/overview'],

      initialize: function(options) {
        this.model = new OverviewModel(options);

        this.model.fetch().done(function(response) {
          this.model.mapIconToMetric();
          this.render();
        }.bind(this));
      },

      render: function() {
        this.$el.html(this.template(this.model.get('fieldActivities')));

        _.each(this.model.get('fieldActivities').metrics, function(metric) {
          new KPIView({model: metric, el: '.overview-kpis'});
        });
      }
    });
});
