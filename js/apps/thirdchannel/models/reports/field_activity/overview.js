define(function(require) {
  var Backbone = require('backbone');

  return Backbone.Model.extend({

    initialize: function (options) {
      this.options = options;
    },

    url: function () {
      // return '/programs/' + this.options.programId + "/reports/" + this.options.surveyType + "/" + this.options.typeId + "/question/" + this.options.questionId + "?format=json";

      return '/programs/Merchandising/reports/field_activities';
    }

  });
});
