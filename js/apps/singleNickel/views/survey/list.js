define(function(require) {
    var jQueryUI = require('jquery-ui'),
        Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ItemView = require('singleNickel/views/survey/list_item'),
        Model = require('singleNickel/models/survey/reindex');

    return Backbone.View.extend({
        template: HandlebarsTemplates['singleNickel/survey/list'],
        events: {
            "sortupdate #survey-list-items": "reindex"
        },
        initialize: function() {
            _.bindAll(this, 'renderSurveyItem');
            this.listenTo(this.collection, 'add', this.renderSurveyItem);
            this.model = new Model({customer: this.collection.options.customer});
        },
        render: function() {
            this.$el.html(this.template(this.collection.options));
            this.renderSurveys();
            return this;
        },
        renderSurveys: function() {
            if(this.collection.isEmpty()) {
                this.$('#survey-list-items').html('<tr><td colspan="2">No Surveys</td></tr>');
            } else {
                this.collection.each(this.renderSurveyItem);
                this.$('#survey-list-items').sortable({
                    handle: '.idx-handle',
                    helper: this.fixHelper
                }).disableSelection();
            }
        },
        renderSurveyItem: function(survey) {
            var itemView = new ItemView({model: survey});
            this.$('#survey-list-items').append(itemView.render().el);
        },
        fixHelper: function(e, ui) {
            ui.children().each(function() {
                $(this).width($(this).width());
            });
            return ui;
        },
        reindex: function(e, ui) {
            this.model.set("order", $.makeArray(this.$("#survey-list-items tr").map(_.bind(function( i, elem ) {
                return { id: this.$(elem).data("survey"), idx: this.$(elem).index() };
            }, this)))).save().fail(function() {
                context.trigger('error');
            });
        }
    });
});