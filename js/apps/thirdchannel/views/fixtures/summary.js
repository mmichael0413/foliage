define(function(require){
    var Backbone = require('backbone'),
        buttons = require('buttons'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),

        Summary = Backbone.View.extend({
            el: '#fixtures-summary',

            template: HandlebarsTemplates["thirdchannel/fixture_tracking/summary"],

            initialize: function () {
                this.render();

                this.listenTo(this.model, 'request', this.renderLoading);
                this.listenTo(this.model, 'change', this.render);
            },

            renderLoading: function() {
                this.$el.html(HandlebarsTemplates["thirdchannel/fixtures/overview_loading"]);
            },

            render: function() {
                this.$el.html(this.template(this.model.attributes));
                return this;
            }

        });

    return Summary;
});