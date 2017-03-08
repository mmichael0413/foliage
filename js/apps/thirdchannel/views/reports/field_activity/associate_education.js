define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        AssociateEducationModel = require('thirdchannel/models/reports/field_Activity/associate_education');

    return Backbone.View.extend({
      el: ".report",
      template: HandlebarsTemplates['thirdchannel/reports/field_activity/associate_education'],

      initialize: function() {
        this.model = new AssociateEducationModel(/* Probably pass program params */);

        this.model.fetch().done(function(response) {
          this.render();
        }.bind(this));
      },

      render: function() {
        this.$el.append(this.template(this.model.attributes));
        return this;
      }
    });
});
