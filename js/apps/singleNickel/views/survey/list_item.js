define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    var View = Backbone.View.extend({
        tagName: 'tr',
        template: HandlebarsTemplates['singleNickel/survey/list_item'],
        events: {
          'click .delete': 'removeSurvey',
          'click .lock': 'toggleLock'
        },
        initialize: function() {
            _.bindAll(this, 'removeSurvey', 'toggleLock');
            this.listenTo(this.model, 'change:locked', this.render);
        },
        render: function() {
            this.$el.html(this.template({survey: this.model.toJSON()}));
            return this;
        },
        removeSurvey: function(e) {
            e.preventDefault();
            var self = this;
            var confirmation = confirm('Are you sure you want to delete this survey?');
            if(confirmation) {
                this.model.destroy().success(function() {
                    self.remove();
                }).fail(function() {
                   alert('Something went wrong... Contact dev team.');
                });
            }
        },
        toggleLock: function(e) {
            e.preventDefault();
            var self = this;
            this.model.toggleLock().done(function(response) {
                self.model.set(response);
            }).fail(function() {
                alert('Unable to toggle the lock.');
            });
        }
    });

    return View;
});