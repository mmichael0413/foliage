define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        MerchandisingModel = require('thirdchannel/models/reports/field_activity/merchandising'),
        ActivityReportsView = require('thirdchannel/views/reports/field_activity/activity_reports'),
        KPIView = require('thirdchannel/views/reports/field_activity/KPI'),
        LoadingView = require('thirdchannel/views/utils/loading');

    return Backbone.View.extend({
      el: ".merchandising",
      template: HandlebarsTemplates['thirdchannel/reports/field_activity/merchandising'],

      initialize: function(options) {
        this.loadingView = new LoadingView();
        this.$el.html(this.loadingView.render().$el);

        this.model = new MerchandisingModel(options);
        this.fetchReport();

        this.listenTo(context, 'fieldActivity:update', this.update);
      },

      fetchReport: function() {
        this.model.fetch().done(function(response) {
          this.render();
          context.trigger("report post render");
        }.bind(this));
      },

      render: function() {
        var fieldActivities = this.model.get('fieldActivities');
        var metrics = _.map(fieldActivities.metrics, function(metric) {

        });



        this.$el.html(this.template(fieldActivities));
        new ActivityReportsView({model: fieldActivities.sections.activityReport, el: '.merchandising-activity-reports'});

        _.each(fieldActivities.metrics, function(metric) {
          var el = (metric.name == "unitsMoved" || metric.name == "caseCapacityDedicated") ? '.widgets' : '.merchandising-kpis';

          new KPIView({model: metric, el: el});
        });

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
