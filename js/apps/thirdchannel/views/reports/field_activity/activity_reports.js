define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
      template: HandlebarsTemplates['thirdchannel/reports/field_activity/activity_reports'],

      events: {
        'click .activity-reports-toggle': 'toggleActivityReportsList'
      },

      initialize: function() {
        this.render();
      },

      render: function() {
        this.$el.html(this.template(this.model));
      },

      toggleActivityReportsList: function(event) {
        var el = $(event.target);

        if (el.data('toggle-open')) {
          el.removeClass('fa-minus-square').addClass('fa-plus-square');
          el.data('toggle-open', false);
        } else {
          el.removeClass('fa-plus-square').addClass('fa-minus-square');
          el.data('toggle-open', true);
        }

        this.$el.find('.activity-reports-surveys').animate({
          height: 'toggle'
        });
      }
    });
});
