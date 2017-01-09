define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        HandlebarsHelpers = require('handlebarsHelpers'),
        context = require('context'),
        helpers = require('helpers'),
        Activity = require('thirdchannel/models/activities/activity'),
        CommentsView = require('thirdchannel/views/comments/comments'),
        NewCommentView = require('thirdchannel/views/comments/new_comment'),
        Like = require('thirdchannel/models/activities/like'),
        Follow = require('thirdchannel/models/activities/follow'),
        Viewer = require('viewer');

    return Backbone.View.extend({
        className: 'activity',
        template: HandlebarsTemplates['thirdchannel/activity'],
        taskTemplate: HandlebarsTemplates['thirdchannel/task'],
        events: {
            'click .activity_like_button': 'likeActivity',
            'click .activity_follow_button': 'followActivity',
            'click .activity_unfollow_button': 'followActivity',
            'click .start-comment': 'focusComment',
            'click .more-comments': 'showAdditionalComments',
            'click .less-comments': 'hideAdditionalComments',
            "click .arrow-left" : "prevSlide",
            "click .arrow-right" : "nextSlide",
            "click .hide-post" : "hidePost",
            "click .task-item" : "loadTask"
        },
        initialize: function (options) {

            var self = this;
            this.programId = options.programId;
            this.currentUserId = options.currentUserId;
            this.highlightWords = options.highlightWords;
            this.mentions = options.mentions;
            this.options = options;
            if (options.model === undefined) {
                this.model = new Activity();
            } else {
                this.model = options.model;
            }
            this.objId = this.model.get('activity_id');
            this.mentions = this.model.get('mentions');
            this.carousel = null;
            this.listenTo(context, 'navigation:collapsed', this.fixCollapsedCarousel);
            this.listenTo(context, 'store.sales.update', this.updateSalesWidget);
        },
        render: function () {
            // setup registry listener
            if (this.model.get('location')) {
                context.trigger("store.sales.register", this.model.get('location').id);
            }

            if(this.model.get('images')) {
                    this.model.set('imageCount', this.model.get('images').length);
            } else {
                this.model.set('imageCount', 0);
            }

            this.model.set('singleActivity', this.options.singleActivity);
            this.model.set('isMobile', helpers.isMobile.any());

            if (this.model.get('comments_count') > 3) {
                this.model.set('additional_comments', this.model.get('comments_count') - 3);
            }

            if (this.model.get('editable') || this.model.get('hideable')) {
                this.model.set('show-moderation', true);
            }

            this.$el.html(this.template(this.model.attributes));

            // render the comments view
            var c = this.$('.comments');
            this.comments = new CommentsView({el: c, activity: this.model, programId: this.programId, mentions: this.mentions, currentUserId: this.currentUserId, highlightWords: this.highlightWords}).render();
            this.newComment = new NewCommentView({el: this.$('.new-comment'), activity: this.model, collection: this.comments.collection}).render();

            this.renderTask();
            return this;
        },
        renderTask: function() {
            if(this.model.get('images')) {
                this.model.set('imageCount', this.model.get('images').length);
            } else {
                this.model.set('imageCount', 0);
            }

            // render task html
            this.$(".activity-details").html(this.taskTemplate(this.model.attributes));

            if (!this.model.get('isMobile')) {
                var viewer = this.$el.find('.activity-photos').viewer({
                    inline: false,
                    rotatable: false,
                    transition: false,
                    scalable: false,
                    fullscreen: false
                });
            }
            return this;
        },

        loadTask: function (e) {
            e.stopPropagation();
            e.preventDefault();
            var model = new Backbone.Model(),
                self = this;
            model.url = e.currentTarget.href;
            model.fetch()
            .done(function () {
                self.model =  (model.get('activities') && model.get('activities').length > 0) ? new Backbone.Model(model.get('activities')[0]) : new Backbone.Model(model.get('activities')[0]);
                self.renderTask();
                self.initializeCarousel();
            });
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
        followActivity: function (e) {
            e.stopPropagation();
            e.preventDefault();

            var self = this;
            var isFollowing = $(e.target).data("following");

            // create model and save it to the server
            var follow = new Follow({id: this.objId}, {programId: this.programId, following: isFollowing});
            follow.save().done(function () {
                if (!isFollowing) {
                    $(e.target).text('Unfollow');
                    $(e.target).data("following", true);
                    $(e.target).addClass('activity_unfollow_button');
                    $(e.target).removeClass('activity_follow_button');
                } else {
                    $(e.target).text('Follow');
                    $(e.target).data("following", false);
                    $(e.target).addClass('activity_follow_button');
                    $(e.target).removeClass('activity_unfollow_button');
                }
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

            var commentLabel = ' More Comments';
            if (this.model.get('additional_comments') === 1){
                commentLabel = ' More Comment';
            }

            var label = 'View ' + this.model.get('additional_comments') + commentLabel;
            $(e.target).text(label).removeClass('less-comments').addClass('more-comments');

        },
        hidePost: function(e) {
            e.preventDefault();
            e.stopPropagation();

            $.ajax({
                url: this.model.get('hideable_url'),
                type: 'post'
            }).done(function(){
                $(e.currentTarget).parent().append('<span class="action">Post has been Hidden</span>');
                $(e.currentTarget).hide();
            });
        },
        openModal: function (e) {
            e.preventDefault();
            e.stopPropagation();
            if($(window).width() / parseFloat($("body").css("font-size")) > 30) {
                context.trigger('activity:openModal', this.model);
            }
        },
        prevSlide: function(e){
            e.preventDefault();
            this.carousel.slickPrev();
        },
        nextSlide: function(e){
            e.preventDefault();
            this.carousel.slickNext();
        },
        initializeCarousel: function(){
            var self = this;
            this.carousel = this.$el.find('.carousel').slick({
                draggable: true,
                arrows: false,
                onInit: function() {
                    var $carousel = self.$('.carousel');
                    var width = $carousel.width();

                    self.$('.slick-slide').height(width);
                    $carousel.find('img').css({'max-width': width, 'max-height': width});
                }
            });
        },
        fixCollapsedCarousel: function() {
            var self = this;
            setTimeout(function(){
                self.carousel.unslick();
                self.initializeCarousel();
            }, 400);
        },
        updateSalesWidget: function (event) {
            var location = this.model.get('location');
            if (location && location.hasOwnProperty('id') && location.id === event.uuid) {
                // only show values with 0 or greater?
                var data = {salesChange: event.salesChange, showLabel: event.value ? true : false,
                    salesUrl: event.salesUrl, message: event.message, mostRecent: event.mostRecent};
                this.$el.find('.activity-meta').append(HandlebarsTemplates['thirdchannel/activities/sales_widget'](data));
                this.$el.find('.sales-widget').fadeIn(500).css("display","inline-block");
            }
        }
    });
});
