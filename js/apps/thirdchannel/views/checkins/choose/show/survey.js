define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context');

    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/checkins/choose'],
        initialize: function (options) {
            this.model = options.model;
        },
        render: function () {
            this.$el.append(this.template(this.model.toJSON()));
            return this;
        }
    });
});