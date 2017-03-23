define(function(require) {
  var Backbone = require('backbone');
  var _ = require('underscore');

  return Backbone.Model.extend({

    iconMapping: {
      "States Visited": "ic ic_states"
    },

    chartMapping: {
      "Visits Completed": {
        type: "donut",
        icon: "ic ic_visit"
      },
      "Stores Visited": {
        type: "bar",
        direction: "vertical",
        icon: "ic ic_store"
      },
      "ThirdChannel Agents": {
        type: "icon",
        icon: "ic ic_person agent",
        color: "#2FB44A",
      },
      "In-Store Support/FMRs": {
        type: "icon",
        icon: "ic ic_person fmr",
        color: "#BDC5C4"
      }
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

      if (this.iconMapping[metric.label]) {
        metric.icon = this.iconMapping[metric.label];
      } else {
        metric.chartType = this.chartMapping[metric.label].type;
        metric.chartIcon = this.chartMapping[metric.label].icon;
        metric.chartColor = this.chartMapping[metric.label].color;
      }

        metric.reverse = true;
        metric.url = "#"; // TODO: Generate URLs

        return metric;
      }.bind(this));

      this.set('fieldActivities', model);
    }

  });
});
