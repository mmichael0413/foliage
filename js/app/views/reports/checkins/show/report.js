define(function(require) {
    var Backbone = require('backbone'),
        ActivityModel = require('app/models/activities/activity'),
        SectionView = require('app/views/reports/checkins/show/section'),
        CommentsView = require('app/views/comments/comments'),
        NewCommentView = require('app/views/comments/new_comment'),
        Expanding = require('libs/expanding');

    return Backbone.View.extend({
        el: ".checkin-report",
        initialize: function (options) {
            this.programId = options.programId;
            this.activityModel = new ActivityModel(window.checkinReportData.activity, {});
        },
        render: function (options) {
            this.$el.find('.section').each(function(){
                new SectionView({el: this}).render();
            });

            this.comments = new CommentsView({el: this.$el.find('.comments'), activity: this.activityModel, programId: this.programId}).render();
            this.newComment = new NewCommentView({el: this.$el.find('.new-comment'), activity: this.activityModel, collection: this.comments.collection}).render();

            return this;
        }
    });
});