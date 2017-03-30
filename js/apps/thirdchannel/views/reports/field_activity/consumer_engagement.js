define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ConsumerEngagementModel = require('thirdchannel/models/reports/field_activity/consumer_engagement'),
        ActivityReportsView = require('thirdchannel/views/reports/field_activity/activity_reports'),
        KPIView = require('thirdchannel/views/reports/field_activity/KPI'),
        LoadingView = require('thirdchannel/views/utils/loading');

    return Backbone.View.extend({
      el: ".consumer-engagement",
      template: HandlebarsTemplates['thirdchannel/reports/field_activity/consumer_engagement'],

      initialize: function(options) {
        this.loadingView = new LoadingView();
        this.$el.html(this.loadingView.render().$el);

        this.model = new ConsumerEngagementModel(options);

        this.fetchReport();
      },

      fetchReport: function() {
        this.model.fetch().done(function(response) {
          this.render();
        }.bind(this));
      },

      render: function() {
        var fieldActivities = this.model.get('fieldActivities');
        this.$el.html(this.template(fieldActivities));
        new ActivityReportsView({model: fieldActivities.sections.activityReport, el: '.consumer-engagement-activity-reports'});
        _.each(fieldActivities.metrics, function(metric) {
          new KPIView({model: metric, el: '.consumer-engagement-kpis'});
        });
        return this;
      },

      update: function(params) {
        this.model.updateFilters(params);
        this.$el.html(this.loadingView.render().$el);
        this.fetchReport();
      }
    });
});
