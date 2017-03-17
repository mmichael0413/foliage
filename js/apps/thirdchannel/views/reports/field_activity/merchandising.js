define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        MerchandisingModel = require('thirdchannel/models/reports/field_activity/merchandising'),
        ActivityReportsView = require('thirdchannel/views/reports/field_activity/activity_reports'),
        KPIView = require('thirdchannel/views/reports/field_activity/KPI');

    return Backbone.View.extend({
      el: ".merchandising",
      template: HandlebarsTemplates['thirdchannel/reports/field_activity/merchandising'],

      initialize: function(options) {
        this.model = new MerchandisingModel(options);

        this.model.fetch().done(function(response) {
          this.render();
        }.bind(this));
      },

      render: function() {
        var fieldActivities = this.model.get('fieldActivities');
        this.$el.html(this.template(fieldActivities));
        new ActivityReportsView({model: fieldActivities.sections.activityReport, el: '.merchandising-activity-reports'});

        _.each(fieldActivities.metrics, function(metric) {
          new KPIView({model: metric, el: '.merchandising-kpis'});
        });

        return this;
      }
    });
});
