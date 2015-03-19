define(function(require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        Model = require('SingleNickel/models/survey');

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
                alert('There was a problem with delete.  Contact Andrew!')
            });

            return this;
        },
        delete: function (e) {
            this.model.destroy().success(function() {
                window.location.href = '/';
            }).fail(function() {
                alert('There was a problem with delete.  Contact Andrew!')
            });
        }
    });
});