define(function(require) {
  var Backbone = require('backbone');

  return Backbone.Model.extend({
    initialize: function (options) {
      this.programId = options.programId;
      this.type = options.type;
      this.filters = options.filters;
    },
    url: function () {
      return '/programs/' + this.programId + '/reports/field_activities/breakdown/' + this.type + '.json' + location.search;
    }
  });
});
