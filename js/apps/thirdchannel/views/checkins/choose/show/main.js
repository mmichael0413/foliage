define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        CheckinSurveyCollection = require('thirdchannel/collections/checkins/chooses'),
        LoadingView = require('thirdchannel/views/utils/loading'),
        CheckinChooseView = require('thirdchannel/views/checkins/choose/show/survey');

    return Backbone.View.extend({
        el: ".choose",
        template: HandlebarsTemplates['thirdchannel/checkins/chooses'],
        initialize: function (options) {
            this.collection = new CheckinSurveyCollection(options);
        },
        render: function () {
            var that = this;
            this.$el.append(new LoadingView().render().$el);
            this.collection.fetch({success: function (collection) {
                that.$el.html(that.template());
                collection.each(function (model) {
                    that.$el.find('.surveys').append(new CheckinChooseView({model: model}).render().$el);
                });
            }});
            return this;
        }
    });
});