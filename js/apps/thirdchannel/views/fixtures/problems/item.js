define(function(require){
    var Backbone = require('backbone'),
        buttons = require('buttons'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),

        ProblemItem = Backbone.View.extend({
            className: 'item pure-g',

            template: HandlebarsTemplates["thirdchannel/fixtures/problem_item"],

            render: function() {
                var data = this.model.toJSON();
                data.programId = context.programId;
                this.$el.html(this.template(data));
                return this;
            }

        });

    return ProblemItem;
});