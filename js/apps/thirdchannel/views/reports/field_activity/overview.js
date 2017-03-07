define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        OverviewModel = require('thirdchannel/models/reports/field_Activity/overview');

    return Backbone.View.extend({
      el: ".report",
      template: HandlebarsTemplates['thirdchannel/reports/field_activity/overview'],

      initialize: function() {
        var self = this;
        this.model = new OverviewModel();

        this.model.fetch().done(function(response) {
          this.render(response);
        }.bind(this));
      },

      render: function(fieldActivities) {
        this.$el.empty();
        this.$el.html(this.template(this.model.attributes));

        return this;
      }
    });
});
