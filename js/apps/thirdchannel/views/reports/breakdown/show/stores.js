define(function(require) {
  var Backbone = require('backbone'),
      Handlebars = require('handlebars'),
      HandlebarsTemplates = require('handlebarsTemplates');

  return Backbone.View.extend({
    template: HandlebarsTemplates['thirdchannel/reports/breakdown/show/stores'],
    initialize: function (options) {
      this.model = options;
    },
    render: function () {
      this.setElement(this.template(this.model));
      return this;
    }
  });
});