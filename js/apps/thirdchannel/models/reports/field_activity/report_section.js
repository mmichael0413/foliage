define(function(require) {
  var Backbone = require('backbone');

  return Backbone.Model.extend({

    params: '',

    initialize: function (options) {
      this.options = options;
    },

    url: function () {
      var section = (this.options.section == 'consumer_engagement_education') ? 'consumer_engagement_&_education' : this.options.section;

      return '/programs/' + this.options.programId + '/reports/field_activities/' + section + '?' + this.params;
    },

    updateFilters: function(params) {
      this.params = params;
    }
  });
});
