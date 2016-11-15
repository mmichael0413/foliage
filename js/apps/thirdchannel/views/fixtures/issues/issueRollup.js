define(function(require){
    var Backbone = require('backbone'),
        buttons = require('buttons'),
        $ = require('jquery'),
        _ = require('underscore'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),

        IssueRollup = Backbone.View.extend({
            render: function () {

                return this;
            }

        });

    return IssueRollup;
});