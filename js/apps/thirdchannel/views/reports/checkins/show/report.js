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
        ProfileCarousel = require('thirdchannel/views/shared/carousel'),
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
        });


    return Backbone.View.extend({
        el: ".checkin-report",
        initialize: function (options) {
            _.extend(context, window.bootstrap);
            this.programId = options.programId;
            context.alerts.created_checkin_id = options.id;
            this.activityModel = new ActivityModel(window.checkinReportData.activity, {});

            this.gallery = new ProfileCarousel({el: '.image-container'});
            this.gallery.render();
        },
        render: function (options) {
            new AllOpenAlertsView().fetch();
            this.$('.section').each(function(){
                new SectionView({el: this}).render();
            });

            this.comments = new CommentsView({el: this.$('.comments'), activity: this.activityModel, programId: this.programId}).render();
            this.newComment = new NewCommentView({el: this.$('.new-comment'), activity: this.activityModel, collection: this.comments.collection}).render();

            return this;
        }
    });
});