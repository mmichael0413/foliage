define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        OverviewModel = require('thirdchannel/models/reports/field_activity/overview');
        KPIView = require('thirdchannel/views/reports/field_activity/KPI'),
        LoadingView = require('thirdchannel/views/utils/loading');


    return Backbone.View.extend({
      el: ".field-activities-overview",
      template: HandlebarsTemplates['thirdchannel/reports/field_activity/overview'],

      initialize: function(options) {
        this.loadingView = new LoadingView();
        this.$el.html(this.loadingView.render().$el);
        this.model = new OverviewModel(options);
        this.fetchReport();
      },

      render: function() {
        this.$el.html(this.template(this.model.attributes));

        _.each(this.model.get('fieldActivities').metrics, function(metric) {
          new KPIView({model: metric, el: '.overview-kpis'});
        });
      },

      fetchReport: function() {
        this.model.fetch().done(function(response) {
          this.model.mapIconToMetric();
          this.render();
        }.bind(this));
      },

      update: function(params) {
        this.model.updateFilters(params);
        this.$el.html(this.loadingView.render().$el);
        this.fetchReport();
      }
    });
});
