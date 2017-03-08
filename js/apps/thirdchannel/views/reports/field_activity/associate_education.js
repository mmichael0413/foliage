define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        AssociateEducationModel = require('thirdchannel/models/reports/field_Activity/associate_education'),
        ActivityReportsView = require('thirdchannel/views/reports/field_activity/activity_reports');

    return Backbone.View.extend({
      el: ".associate-education",
      template: HandlebarsTemplates['thirdchannel/reports/field_activity/associate_education'],

      initialize: function() {
        this.model = new AssociateEducationModel(/* Probably pass program params */);

        this.model.fetch().done(function(response) {
          this.render();
        }.bind(this));
      },

      render: function() {
        this.$el.html(this.template(this.model.attributes));
        new ActivityReportsView({model: this.model.get('activityReport'), el: '.associate-education-activity-reports'});
        return this;
      }
    });
});
