define(function(require){
    var _ = require('underscore'),
        $ = require('jquery'),
        Backbone = require('backbone'),
        buttons = require('buttons'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ProblemItemView = require('thirdchannel/views/fixtures/problems/item'),

        Summary = Backbone.View.extend({
            el: '#fixtures-problems',

            template: HandlebarsTemplates["thirdchannel/fixtures/problems_summary"],

            initialize: function() {
                this.render();
                this.listenTo(this.collection, 'reset', this.renderCollection);
            },

            render: function() {
                this.$el.html(this.template({}));
                this.renderCollection();
                return this;
            },

            renderCollection: function() {
                var $body = this.$('.body');
                $body.html('');
                this.collection.each(function(problem) {
                    $body.append(new ProblemItemView({model: problem}).render().el);
                });
            }
        });

    return Summary;
});