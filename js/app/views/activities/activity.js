define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        HandlebarsHelpers = require('handlebarsHelpers'),
        context = require('context'),
        Activity = require('app/models/activities/activity'),
        CommentsView = require('app/views/comments/comments'),
        NewCommentView = require('app/views/comments/new_comment'),
        Like = require('app/models/activities/like'),
        SlickCarousel = require('slick_carousel');

    return Backbone.View.extend({
        className: 'activity',
        template: HandlebarsTemplates.activity,
        events: {
            'click .activity_like_button': 'likeActivity',
            'click .start-comment': 'focusComment',
            'click .more-comments': 'showAdditionalComments',
            'click .less-comments': 'hideAdditionalComments',
            'click .carousel img': 'openModal',
            "click .arrow-left" : "prevSlide",
            "click .arrow-right" : "nextSlide",
            "click .hide-post" : "hidePost"
        },
        initialize: function (options) {
            var self = this;
            this.programId = options.programId;
            if (options.model === undefined) {
                this.model = new Activity();
            } else {
                this.model = options.model;
                if(options.model.get('images')) {
                    this.model.set('imageCount', options.model.get('images').length);
                } else {
                    this.model.set('imageCount', 0);
                }
            }

            this.objId = this.model.get('activity_id');
            this.carousel = null;

            this.listenTo(context, 'navigation:collapsed', this.fixCollapsedCarousel);
        },
        render: function () {
            // render the base activity
            if (this.model.get('comments_count') > 3) {
                this.model.set('additional_comments', this.model.get('comments_count') - 3);
            }

            if (this.model.get('editable') || this.model.get('hideable')) {
                this.model.set('show-moderation', true);
            }

            this.$el.html(this.template(this.model.attributes));

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
    }
    });
});