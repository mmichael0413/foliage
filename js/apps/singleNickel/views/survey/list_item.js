define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        tagName: 'tr',
        template: HandlebarsTemplates['singleNickel/survey/list_item'],
        events: {
          'click .delete': 'removeSurvey',
          'click .lock': 'toggleLock',
          'click .reindex': 'reindexSurvey',
          'click .clone': 'cloneSurvey'
        },
        initialize: function() {
            _.bindAll(this, 'removeSurvey', 'toggleLock');
            this.listenTo(this.model, 'change:locked', this.render);
        },
        render: function() {
            var attributes = _.extend({survey: this.model}, this.model.toJSON());
            this.$el.html(this.template(attributes));
            this.$el.attr("data-survey", this.model.get("id"));
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

            this.model.reindex().done(function(response) {
                alert('Successfully re-indexed survey');
            }).fail(function() {
                context.trigger('error');
            });
        },
        cloneSurvey: function(e) {
            e.preventDefault();

            var self = this;

            this.model.cloneSurvey().done(function(response) {
                self.model.collection.add(response);
            }).fail(function() {
                context.trigger('error');
            });
        }
    });
});