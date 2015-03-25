define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ItemView = require('singleNickel/views/survey/list_item');

    var View = Backbone.View.extend({
        template: HandlebarsTemplates['singleNickel/survey/list'],
        initialize: function() {
            _.bindAll(this, 'renderSurveyItem');
        },
        render: function() {
            this.$el.html(this.template());
            this.renderSurveys();
            return this;
        },
        renderSurveys: function() {
            if(this.collection.isEmpty()) {
                this.$('#survey-list-items').html('<tr><td colspan="2">No Surveys</td></tr>');
            } else {
                this.collection.each(this.renderSurveyItem);
            }
        },
        renderSurveyItem: function(survey) {
            var itemView = new ItemView({model: survey});
            this.$('#survey-list-items').append(itemView.render().el);
        }
    });

    return View;
});