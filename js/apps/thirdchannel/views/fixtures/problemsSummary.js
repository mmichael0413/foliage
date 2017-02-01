define(function(require){
    var _ = require('underscore'),
        $ = require('jquery'),
        Backbone = require('backbone'),
        buttons = require('buttons'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),

        Summary = Backbone.View.extend({
            el: '#fixtures-problems',

            template: HandlebarsTemplates["thirdchannel/fixture_tracking/problems_summary"],

            initialize: function () {
            },

            render: function() {
                this.$el.html(this.template());

                // render list (pass in collection)

                return this;
            }

        });

    return Summary;
});