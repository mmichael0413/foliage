define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),

        JobCreate = Backbone.View.extend({

            template: HandlebarsTemplates['thirdchannel/manage/jobs/create'],

            render: function() {
                this.$el.html(this.template());
                return this;
            }
        });

    return JobCreate;
});