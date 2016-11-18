define(function(require){
    var Backbone = require('backbone'),
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