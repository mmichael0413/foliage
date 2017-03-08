define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ConsumerEngagementModel = require('thirdchannel/models/reports/field_Activity/consumer_engagement'),
        ActivityReportsView = require('thirdchannel/views/reports/field_activity/activity_reports'),
        KPIView = require('thirdchannel/views/reports/field_activity/KPI');

    return Backbone.View.extend({
      el: ".consumer-engagement",
      template: HandlebarsTemplates['thirdchannel/reports/field_activity/consumer_engagement'],

      initialize: function() {
        this.model = new ConsumerEngagementModel(/* Probably pass program params */);

        this.model.fetch().done(function(response) {
          this.render();
        }.bind(this));
      },

      render: function() {
        this.$el.html(this.template(this.model.attributes));
        new ActivityReportsView({model: this.model.get('activityReport'), el: '.consumer-engagement-activity-reports'});
        _.each(this.model.get('metrics'), function(metric) {
          new KPIView({model: metric, el: '.consumer-engagement-kpis'});
        });
        return this;
      }
    });
});
