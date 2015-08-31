define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        context = require('context'),
        ActivityModel = require('thirdchannel/models/activities/activity'),
        SectionView = require('thirdchannel/views/reports/checkins/show/section'),
        CommentsView = require('thirdchannel/views/comments/comments'),
        NewCommentView = require('thirdchannel/views/comments/new_comment'),
        OpenAlertsView = require('thirdchannel/views/store_profile/open_alerts'),
        BaseAlertsCollection = require('thirdchannel/collections/alerts/base'),
        Expanding = require('expanding'),
        CarouselView = require('thirdchannel/views/shared/carousel'),
        AllOpenAlertsView = OpenAlertsView.extend({
            collectionClass: BaseAlertsCollection.extend({
                resolved: false,
                getCustomerStoreId: function () {
                    return context.alerts.store_id;
                },
                getCreatedCheckinId: function () {
                    return context.alerts.created_checkin_id;
                }
            })
        }),
        choicesModal = require('thirdchannel/modals/reports/checkins/choices'),
        choicesModel = require('thirdchannel/models/reports/checkins/choices');


    return Backbone.View.extend({
        el: ".checkin-report",
        events: {
            'click .choices' : 'showChoices'
        },
        initialize: function (options) {
            _.extend(context, window.bootstrap);
            this.programId = options.programId;
            this.checkinId = options.id;
            context.alerts.created_checkin_id = options.id;
            this.activityModel = new ActivityModel(window.checkinReportData.activity, {});

            new CarouselView({collection: new Backbone.Collection(context.images)}).render();
        },
        render: function (options) {
            new AllOpenAlertsView().fetch();
            this.$('.section').each(function(){
                new SectionView({el: this}).render();
            });

            this.comments = new CommentsView({el: this.$('.comments'), activity: this.activityModel, programId: this.programId}).render();
            this.newComment = new NewCommentView({el: this.$('.new-comment'), activity: this.activityModel, collection: this.comments.collection}).render();

            return this;
        },
        showChoices: function (e) {
            e.preventDefault();
            var self = this,
                choices = this.$(e.target),
                model = new choicesModel({
                    programId: this.programId,
                    checkinId: this.checkinId,
                    questionId: choices.data('question')
                });

            model.fetch({success: function(model) {
                self.$el.append(new choicesModal({model: model}).render().el);
            }});
        }
    });
});