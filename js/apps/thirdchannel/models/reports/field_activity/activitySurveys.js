define(function(require) {
  var Backbone = require('backbone');

  return Backbone.Model.extend({

    initialize: function (options) {
      this.options = options;
    },

    url: function () {
      var section = (this.options.section == 'consumer_engagement_selling') ? 'consumer_engagement_&_selling' : this.options.section;

      return '/programs/' + this.options.programId + '/reports/field_activities/' + section + '/surveys?' + this.options.params;
    }
  });
});
