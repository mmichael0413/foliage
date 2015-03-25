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
            var self = this;
            this.model.fetch().success(function() {
                self.$el.html(self.template(self.model));
                self.$('select').chosen({disable_search: true, width: "100%"});
                self.$('.datetime').datetimepicker();
            }).fail(function() {
                alert('There was a problem with show.  Contact Andrew!');
            });

            return this;
        }
    });
});