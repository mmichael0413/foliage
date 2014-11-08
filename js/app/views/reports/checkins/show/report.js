define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        context = require('context'),
        ActivityModel = require('app/models/activities/activity'),
        SectionView = require('app/views/reports/checkins/show/section'),
        CommentsView = require('app/views/comments/comments'),
        NewCommentView = require('app/views/comments/new_comment'),
        OpenAlertsView = require('app/views/store_profile/open_alerts'),
        BaseAlertsCollection = require('app/collections/alerts/base'),
        Expanding = require('libs/expanding'),
        HoverableImageView = require('app/views/store_profile/hoverable_image'),
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

            var galleryBody = $("#images .image-container");

            _.each(context.images, function (image){
                galleryBody.append(new HoverableImageView({model: new Backbone.Model(image)}).render().$el);
            });

            $('#images .image-container').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                //centerMode: true,
                focusOnSelect: true,
                variableWidth: true,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        },
        render: function (options) {
            new AllOpenAlertsView().fetch();
            this.$el.find('.section').each(function(){
                new SectionView({el: this}).render();
            });

            this.comments = new CommentsView({el: this.$el.find('.comments'), activity: this.activityModel, programId: this.programId}).render();
            this.newComment = new NewCommentView({el: this.$el.find('.new-comment'), activity: this.activityModel, collection: this.comments.collection}).render();

            return this;
        }
    });
});