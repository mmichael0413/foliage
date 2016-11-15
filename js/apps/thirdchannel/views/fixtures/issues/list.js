define(function(require){
    var Backbone = require('backbone'),
        buttons = require('buttons'),
        $ = require('jquery'),
        _ = require('underscore'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),


        IssuesList = Backbone.View.extend({
            render: function () {

                return this;
            }

        });

    return IssuesList;
});