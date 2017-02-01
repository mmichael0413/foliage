define(function(require){
    var _ = require('underscore'),
        $ = require('jquery'),
        Backbone = require('backbone'),
        buttons = require('buttons'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),

        ProblemItem = Backbone.View.extend({
            template: HandlebarsTemplates["thirdchannel/fixture_tracking/problem_item"],

            render: function() {
                this.$el.html(this.template(model.toJSON()));
                return this;
            }

        });

    return ProblemItem;
});