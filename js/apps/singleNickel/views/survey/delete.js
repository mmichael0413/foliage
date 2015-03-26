define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        Model = require('singleNickel/models/survey');

    return Backbone.View.extend({
        template: HandlebarsTemplates['singleNickel/survey/delete'],
        events: {
            'click #confirm': 'delete'
        },
        initialize: function(args) {
            this.model = new Model({id: args.surveyId});
        },
        render: function() {
            var self = this;
            this.model.fetch().success(function() {
                self.$el.html(self.template(self.model));
            }).fail(function() {
                context.trigger('error');
            });

            return this;
        },
        delete: function (e) {
            this.model.destroy().success(function() {
                window.location.href = '/';
            }).fail(function() {
                context.trigger('error');
            });
        }
    });
});