define(function(require){
    var Backbone = require('backbone'),
        buttons = require('buttons'),
        $ = require('jquery'),
        _ = require('underscore'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),


        Summary = Backbone.View.extend({
            el: "#",

            initialize: function () {
                this.listenTo(context, 'filter:query', this.fetch);

            },

            fetch: function () {
                this.$el.html(HandlebarsTemplates["thirdchannel/fixtures/overview_loading"]);

            },

            render: function () {

                return this;
            }

        });


    return Summary;

});