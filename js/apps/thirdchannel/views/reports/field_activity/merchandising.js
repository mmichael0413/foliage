define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        MerchandisingModel = require('thirdchannel/models/reports/field_Activity/merchandising'),
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
        this.$el.html(this.template(this.model.attributes));
        new ActivityReportsView({model: this.model.get('activityReport'), el: '.merchandising-activity-reports'});

        _.each(this.model.get('metrics'), function(metric) {
          new KPIView({model: metric, el: '.merchandising-kpis'});
        });

        return this;
      }
    });
});
