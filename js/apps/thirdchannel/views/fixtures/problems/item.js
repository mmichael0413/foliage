define(function(require){
    var _ = require('underscore'),
        $ = require('jquery'),
        Backbone = require('backbone'),
        buttons = require('buttons'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),

        ProblemItem = Backbone.View.extend({
            className: 'item pure-g',

            template: HandlebarsTemplates["thirdchannel/fixtures/problem_item"],

            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }

        });

    return ProblemItem;
});