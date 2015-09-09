define(function(require) {
    var context = require('context'),
        Backbone = require('backbone'),
        ChoicesModal = require('thirdchannel/modals/reports/checkins/choices'),
        ChoicesModel = require('thirdchannel/models/reports/checkins/choices');

    return Backbone.View.extend({
        el: ".checkin-report",
        events: {
            'click .choices' : 'showChoices'
        },
        initialize: function (options) {
            this.surveyType = options.surveyType;
            this.typeId = options.typeId;
        },
        render: function (options) {
            return this;
        },
        showChoices: function (e) {
            e.preventDefault();
            var self = this,
                choices = this.$(e.target),
                model = new ChoicesModel({
                    programId: context.programId,
                    surveyType: this.surveyType,
                    typeId: this.typeId,
                    questionId: choices.data('question')
                });

            model.fetch({success: function(model) {
                self.$el.append(new ChoicesModal({model: model}).render().el);
            }});
        }
    });
});