define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        Chosen = require('chosen'),
        DateTimePicker = require('dateTimePicker');

    return Backbone.View.extend({
        template: HandlebarsTemplates['singleNickel/survey/show'],
        initialize: function(args) {
            this.model = args.model;
        },
        render: function() {
            this.$el.html(this.template(this.model));
            this.$('select').chosen({disable_search: true, width: "100%"});
            this.$('.datetime').datetimepicker();
            return this;
        }
    });
});