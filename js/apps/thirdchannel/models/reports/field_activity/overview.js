define(function(require) {
  var Backbone = require('backbone');
  var _ = require('underscore');

  return Backbone.Model.extend({

    iconMapping: {
      "States Visited": "ic ic_states",
      "ThirdChannel Agents": "ic ic_person agent",
      "In-Store Support/FMRs": "ic ic_person fmr"
    },

    initialize: function (options) {
      this.options = options;
    },

    url: function () {
      return '/programs/' + this.options.programId + '/reports/field_activities';
    },

    mapIconToMetric: function() {
      var model = _.clone(this.get('fieldActivities'));
      model.metrics = _.map(model.metrics, function(metric) {
        metric.icon = this.iconMapping[metric.label];
        metric.reverse = true;
        metric.url = "#"; // TODO: Generate URLs

        return metric;
      }.bind(this));

      this.set('fieldActivities', model);
    }

  });
});
