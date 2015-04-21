define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        className: 'sub-section',
        template: HandlebarsTemplates['procrastination/schedule/schedule_row'],
        initialize: function(options) {
            this.model = options.model;
            console.log('initialize me');
        },

        render: function() {
            this.$el.html(this.template(this.model.attributes));

            return this;
        }

    });

});