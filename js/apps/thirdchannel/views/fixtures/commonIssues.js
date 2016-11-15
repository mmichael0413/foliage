define(function(require){
    var Backbone = require('backbone'),
        buttons = require('buttons'),
        $ = require('jquery'),
        _ = require('underscore'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),


        CommonIssues = Backbone.View.extend({
            el: '#fixtures-common-issues',

            initialize: function() {

            },

            render: function () {

                return this;
            }

        });

    return CommonIssues;
});