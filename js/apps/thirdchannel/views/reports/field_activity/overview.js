define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        OverviewModel = require('thirdchannel/models/reports/field_Activity/overview');

    return Backbone.View.extend({
      el: ".field-activities-overview",
      template: HandlebarsTemplates['thirdchannel/reports/field_activity/overview'],

      initialize: function(options) {
        var self = this;

        this.model = new OverviewModel(options);

        this.model.fetch().done(function(response) {
          this.model.mapIconToMetric();
          this.render();
        }.bind(this));
      },

      render: function() {
        this.$el.html(this.template(this.model.get('fieldActivities')));
        return this;
      }
    });
});
