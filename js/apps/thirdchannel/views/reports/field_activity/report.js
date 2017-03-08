define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        OverviewView = require('thirdchannel/views/reports/field_activity/overview'),
        AssociateEducationView = require('thirdchannel/views/reports/field_activity/associate_education');

    return Backbone.View.extend({
        el: '.report',
        template: HandlebarsTemplates['thirdchannel/reports/field_activity/main'],

        initialize: function() {
          this.$el.html(this.template());
          new OverviewView();
          new AssociateEducationView();
        }
    });
});
