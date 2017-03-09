define(function(require) {
  var Backbone = require('backbone');
  var _ = require('underscore');

  return Backbone.Model.extend({

    iconMapping: {
      "Visits Completed": "fa fa-hand-lizard-o",
      "Stores Visited": "fa fa-hand-lizard-o",
      "States Visited": "ic ic_states",
      "ThirdChannel Agents": "ic ic_person agent",
      "In-Store Support/FMRs": "ic ic_person fmr"
    },

    initialize: function (options) {
      this.options = options;
    },

    url: function () {
      // return '/programs/' + this.options.programId + "/reports/" + this.options.surveyType + "/" + this.options.typeId + "/question/" + this.options.questionId + "?format=json";

      return '/programs/Merchandising/reports/field_activities';
    },

    mapIconToMetric: function() {
      var self = this;

      var model = _.clone(this.get('fieldActivities'));
      model.metrics = _.map(model.metrics, function(metric) {
        metric.icon = self.iconMapping[metric.label];
        return metric;
      });

      this.set('fieldActivities', model);
    }

  });
});
