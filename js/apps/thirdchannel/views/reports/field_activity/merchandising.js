define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        MerchandisingModel = require('thirdchannel/models/reports/field_Activity/merchandising'),
        ActivityReportsView = require('thirdchannel/views/reports/field_activity/activity_reports');

    return Backbone.View.extend({
      el: ".merchandising",
      template: HandlebarsTemplates['thirdchannel/reports/field_activity/merchandising'],

      initialize: function() {
        this.model = new MerchandisingModel(/* Probably pass program params */);

        this.model.fetch().done(function(response) {
          this.render();
        }.bind(this));
      },

      render: function() {
        this.$el.html(this.template(this.model.attributes));
        new ActivityReportsView({model: this.model.get('activityReport'), el: '.merchandising-activity-reports'});
        return this;
      }
    });
});
