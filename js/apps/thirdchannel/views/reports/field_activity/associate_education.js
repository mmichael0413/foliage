define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        AssociateEducationModel = require('thirdchannel/models/reports/field_activity/associate_education'),
        ActivityReportsView = require('thirdchannel/views/reports/field_activity/activity_reports'),
        KPIView = require('thirdchannel/views/reports/field_activity/KPI'),
        LoadingView = require('thirdchannel/views/utils/loading');

    return Backbone.View.extend({
      el: '.associate-education',
      template: HandlebarsTemplates['thirdchannel/reports/field_activity/associate_education'],

      initialize: function(options) {
        this.loadingView = new LoadingView();
        this.$el.html(this.loadingView.render().$el);

        this.model = new AssociateEducationModel(options);

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

        // TODO: This will eventually be its own API call
        // We will have to track if this exists in this view and either update or create a new one
        new ActivityReportsView({model: fieldActivities.sections.activityReport, el: '.associate-education-activity-reports'});

        _.each(fieldActivities.metrics, function(metric) {
          new KPIView({model: metric, el: '.associate-education-kpis'});
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
