define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        OverviewModel = require('thirdchannel/models/reports/field_activity/overview'),
        KPIView = require('thirdchannel/views/reports/field_activity/KPI'),
        LoadingView = require('thirdchannel/views/utils/loading');


    return Backbone.View.extend({
      el: ".field-activities-overview",
      template: HandlebarsTemplates['thirdchannel/reports/field_activity/overview'],

      events: {
        'click .anchor': 'scrollToSection'
      },

      initialize: function(options) {
        this.loadingView = new LoadingView();
        this.$el.html(this.loadingView.render().$el);
        this.model = new OverviewModel(options);
        this.fetchReport();

        this.listenTo(context, 'fieldActivity:update', this.update);
      },

      render: function() {
        this.$el.html(this.template(this.model.attributes));

        _.each(this.model.get('fieldActivities').metrics, function(metric) {
          new KPIView({model: metric, el: '.overview-kpis'});
        });

        context.trigger("report post render");
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
      },

      scrollToSection: function(event) {
        event.preventDefault();
        /*
          Normally we can use traditional page anchors to scrool to sections, but with the filter params,
          this practice doesn't work, and we instead get some filtering bugs.
        */

        var section = $(event.target).data('section');

        $('.content-holder').animate({
          scrollTop: $(section).offset().top
        }, 500);
      }
    });
});
