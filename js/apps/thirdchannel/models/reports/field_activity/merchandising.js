define(function(require) {
  var Backbone = require('backbone');

  return Backbone.Model.extend({
    params: '',

    initialize: function (options) {
      this.options = options;
    },

    url: function () {
      return '/programs/' + this.options.programId + '/reports/field_activities/merchandising?' + this.params;
    },

    updateFilters: function(params) {
      this.params = params;
    }
  });
});
