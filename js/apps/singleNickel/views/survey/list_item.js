define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    var View = Backbone.View.extend({
        tagName: 'tr',
        template: HandlebarsTemplates['singleNickel/survey/list_item'],
        events: {
          'click .delete': 'removeSurvey',
          'click .lock': 'toggleLock',
          'click .reindex': 'reindexSurvey'
        },
        initialize: function() {
            _.bindAll(this, 'removeSurvey', 'toggleLock');
            this.listenTo(this.model, 'change:locked', this.render);
        },
        render: function() {
            var attributes = _.extend({survey: this.model}, this.model.toJSON());
            this.$el.html(this.template(attributes));
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
                    context.trigger('error');
                });
            }
        },
        toggleLock: function(e) {
            e.preventDefault();
            var self = this;
            this.model.toggleLock().done(function(response) {
                self.model.set(response);
            }).fail(function() {
                context.trigger('error');
            });
        },
        reindexSurvey: function(e) {
            e.preventDefault();
            var self = this;

            this.model.reindex().done(function(response) {
                alert('Successfully re-indexed survey');
            }).fail(function() {
                context.trigger('error');
            });
        }
    });

    return View;
});