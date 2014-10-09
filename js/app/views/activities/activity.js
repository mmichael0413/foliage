define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        HandlebarsHelpers = require('handlebarsHelpers'),
        EventListener = require('app/utils/eventListener'),
        Activity = require('app/models/activities/activity'),
        CommentsView = require('app/views/comments/comments'),
        NewCommentView = require('app/views/comments/new_comment'),
        Like = require('app/models/activities/like'),
        OwlCarousel = require('libs/owl.carousel');


    return Backbone.View.extend({
        className: 'activity',
        template: HandlebarsTemplates.activity,
        events: {
            'click .activity_like_button': 'likeActivity',
            'click .start-comment': 'focusComment',
            'click .more-comments': 'showAdditionalComments',
            'click .less-comments': 'hideAdditionalComments',
            'click .owl-carousel img': 'openModal'
        },
        initialize: function (options) {

            this.programId = options.programId;
            if (options.model === undefined) {
                this.model = new Activity();
            } else {
                this.model = options.model;
                this.model.set('imageCount', options.model.get('images').length);
            }

            this.objId = this.model.get('activity_id');
        },
        render: function () {
            // render the base activity
            if (this.model.get('comments_count') > 3) {
                this.model.set('additional_comments', this.model.get('comments_count') - 3);
            }

            this.$el.html(this.template(this.model.attributes));

            // initialize the carousel
            //   this.$('.m-carousel').carousel();
            this.$(".owl-carousel").owlCarousel({

                navigation : true, // Show next and prev buttons
                slideSpeed : 300,
                paginationSpeed : 400,
                singleItem:true
            });
            var self = this;
            // this.$('.activity-photos img').on('load', function(){self.onLoad(this)});



            // render the comments view
            var c = this.$('.comments');
            this.comments = new CommentsView({el: c, activity: this.model, programId: this.programId});
            this.comments.render();

            this.newComment = new NewCommentView({el: this.$('.new-comment'), activity: this.model, collection: this.comments.collection});
            this.newComment.render();
            return this;
        },
        likeActivity: function (e) {
            e.stopPropagation();
            e.preventDefault();

            var self = this;

            // create like model and save it to the server
            var like = new Like({id: this.objId}, {programId: this.programId});
            like.save().done(function () {
                var updatedCount = self.model.get('like_count') + 1;
                self.$('.like-count').text(updatedCount);

                var likeLabel = self.$('.like-label');
                if (updatedCount == 1) {
                    likeLabel.text(' Like');
                } else {
                    likeLabel.text(' Likes');
                }

                $(e.target).replaceWith('Liked');
            });
        },
        focusComment: function (e) {
            e.preventDefault();
            e.stopPropagation();

            this.newComment.commentFocus();
        },
        showAdditionalComments: function (e) {
            e.preventDefault();
            e.stopPropagation();

            this.comments.showAllComments();

            $(e.target).text('Hide Comments').removeClass('more-comments').addClass('less-comments');

        },
        hideAdditionalComments: function (e) {
            e.preventDefault();
            e.stopPropagation();

            this.comments.showOriginalComments();

            var label = 'View ' + this.model.get('additional_comments') + ' More Comments';
            $(e.target).text(label).removeClass('less-comments').addClass('more-comments');

        },
        openModal: function (e) {
            e.preventDefault();
            e.stopPropagation();
            if($(window).width() / parseFloat($("body").css("font-size")) > 30) {
                EventListener.trigger('activity:openModal', this.model);
            }
        },
        closeModal: function (e) {
            EventListener.trigger('activity:closeModal');
        },
        onLoad: function (div) {

            $(div).load(function(){
                console.log('got here');
                var height = $(div.currentTarget).height();
                console.log(height);
                var it = $(div.currentTarget).parents('.item');
                if (it && it.height() > height) {

                    // find all .items and set their height
                    _.each(this.$('.item'), function(item){
                        $(item).height(height);
                    });
                }
            });

        }
    });
});