define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        OverviewView = require('thirdchannel/views/reports/field_activity/overview');

    return Backbone.View.extend({
  
        initialize: function() {
          new OverviewView();
        }
    });
});
