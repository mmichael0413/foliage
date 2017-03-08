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
        this.model = new OverviewModel(/* Probably pass program params */);

        this.model.fetch().done(function(response) {
          this.render();
        }.bind(this));
      },

      render: function() {
        this.$el.html(this.template(this.model.get('fieldActivities')));
        return this;
      }
    });
});
