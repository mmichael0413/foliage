define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ReportSectionModel = require('thirdchannel/models/reports/field_activity/report_section'),
        ActivityReportsView = require('thirdchannel/views/reports/field_activity/activity_reports'),
        KPIView = require('thirdchannel/views/reports/field_activity/KPI'),
        LoadingView = require('thirdchannel/views/utils/loading');

    return Backbone.View.extend({

      initialize: function(options) {
        this.options = options;
        this.template = HandlebarsTemplates['thirdchannel/reports/field_activity/report_section'];

        this.loadingView = new LoadingView();
        this.$el.html(this.loadingView.render().$el);

        this.model = new ReportSectionModel(options);

        this.fetchReport();
        this.listenTo(context, 'fieldActivity:update', this.update);
      },

      fetchReport: function() {
        this.model.fetch().done(function(response) {
          this.render();
        }.bind(this));
      },

      render: function() {
        var fieldActivities = this.model.get('fieldActivities');
        this.$el.html(this.template({label: fieldActivities.sections.label, section: this.options.section}));

        new ActivityReportsView({
          el: this.$el.find('.activity-reports-container'),
          model: fieldActivities.sections.activityReport,
          section: this.options.section,
          programId: this.options.programId,
          params: this.model.params
        });

        _.each(fieldActivities.metrics, function(metric) {
          new KPIView({model: metric, el: this.$el.find('.kpi-container')});
        }.bind(this));

        context.trigger("report post render");

        return this;
      },

      update: function(params) {
        this.model.updateFilters(params);
        this.$el.html(this.loadingView.render().$el);
        this.fetchReport();
      }
    });
});
