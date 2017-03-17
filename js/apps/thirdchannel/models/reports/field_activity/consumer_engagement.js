define(function(require) {
  var Backbone = require('backbone');

  return Backbone.Model.extend({

    initialize: function (options) {
      this.options = options;
    },

    url: function () {
      return '/programs/' + this.options.programId + '/reports/field_activities/consumer_engagement_selling';
    }

  });
});
