define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ActivitySurveysModel = require('thirdchannel/models/reports/field_activity/activitySurveys'),
        LoadingView = require('thirdchannel/views/utils/loading');

    return Backbone.View.extend({
      template: HandlebarsTemplates['thirdchannel/reports/field_activity/activity_reports'],
      rowTemplate: HandlebarsTemplates['thirdchannel/reports/field_activity/activity_reports_row'],
      iconMapping: {
        "Visits Completed": "ic ic_visit",
        "Stores Visited": "ic ic_store",
        "States Visited": "ic ic_states",
        "ThirdChannel Agents": "ic ic_person agent",
        "In-Store Support/FMRs": "ic ic_person fmr"
      },

      events: {
        'click .activity-reports-toggle': 'toggleActivityReportsList'
      },

      initialize: function(options) {
        this.options = options;

        this.loadingView = new LoadingView();
        this.$el.html(this.loadingView.render().$el);

        this.model.rollups = _.map(this.model.rollups, function(rollup) {
          rollup.icon = this.iconMapping[rollup.label];
          return rollup;
        }.bind(this));

        this.render();
      },

      render: function() {
        this.$el.prepend(this.template(this.model));

        this.surveys = new ActivitySurveysModel({section: this.options.section, programId: this.options.programId, params: this.options.params});
        this.surveys.fetch().done(function(response) {
          this.loadingView.remove();
          this.$el.find('.activity-reports-surveys').append(this.rowTemplate(response));
        }.bind(this));
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
