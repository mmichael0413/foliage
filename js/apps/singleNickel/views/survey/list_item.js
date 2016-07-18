define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        CloneModal = require('singleNickel/modals/clone'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        tagName: 'tr',
        template: HandlebarsTemplates['singleNickel/survey/list_item'],
        events: {
            'click .delete': 'removeSurvey',
            'click .lock': 'toggleLock',
            'click .reindex': 'reindexSurvey',
            'click .clone': 'openCloneModal',
            'click .export': 'toggleExport'
        },
        initialize: function() {
            _.bindAll(this, 'removeSurvey', 'toggleLock');
            this.listenTo(this.model, 'change:locked', this.render);
        },
        render: function() {
            var attributes = _.extend({survey: this.model}, this.model.toJSON());
            this.$el.html(this.template(attributes));
            this.$el.attr("data-survey", this.model.get("id"));
            this.$el.find(".survey-list-container").hide();
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
        openCloneModal: function(e) {
            e.preventDefault();
            context.modal = new CloneModal({model: this.model});
            $(".modal").append(context.modal.render().el);
        },
        toggleExport: function(e) {
            e.preventDefault();
            var container = this.$el.find(".export-container");

            if (container.hasClass('visible')) {
                container.hide('fast', "linear");
                container.removeClass('visible');
                $(e.currentTarget).removeClass('survey-toggle-on');
            }
            else {
                container.addClass('visible');
                $(e.currentTarget).addClass('survey-toggle-on');
                container.show('fast', "linear");
            }
        },
        reindexSurvey: function(e) {
            e.preventDefault();

            this.model.reindex().done(function(response) {
                alert('Successfully re-indexed survey');
            }).fail(function() {
                context.trigger('error');
            });
        }
    });
});