define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        CommentView = require('thirdchannel/views/comments/comment'),
        Comment = require('thirdchannel/models/comments/comment'),
        CommentsCollection = require('thirdchannel/collections/comments/comments');

    return Backbone.View.extend({
        el: '.comments',
        initialize: function(options) {
            this.activity = options.activity;
            this.programId = options.programId;
            this.objId = this.activity.get('id');
            this.mentions = options.activity.get('mentions');
            this.currentUserId = options.currentUserId;
            this.highlightWords = options.highlightWords;
            this.commentUrl = '/programs/' + this.programId + '/activities/' + this.objId + '/comments';
            // initialize collection
            this.collection = new CommentsCollection([], {
                url: this.commentUrl
            });
            this.collapsed = true;
            this.visibleComments = 0;
            this.collection.bind('redraw', this.reload, this);
            this.showOriginalComments();
        },
        render: function() {
            var self = this;
            self.$el.empty();
            var modelsToRender;
            if(self.collapsed){
                modelsToRender = _.last(self.collection.models, 3);
            } else {
                modelsToRender = self.collection.models;
            }
            _.each(modelsToRender, function(model) {
                self.$el.append(new CommentView({
                    model: model,
                    activityId: self.objId,
                    programId: self.programId,
                    mentions: self.mentions,
                    currentUserId: self.currentUserId,
                    highlightWords: self.highlightWords
                }).render().el);
            });
            self.visibleComments = modelsToRender.length;
            self.trigger('commentsShown:changed');
            return this;
        },
        reload: function() {
            var self = this;
            self.collection.fetch({
                data: {
                    type: self.activity.get('type')
                }
            }).success(function(data, status) {
                var mentions = self.activity.get('mentions');
                var commentModels = [];
                _.each(data, function(comment) {
                    commentModels.push(new Comment(comment, {
                        url: self.commentUrl,
                        mentions: mentions,
                        currentUserId: self.currentUserId,
                        highlightWords: self.highlightWords
                    }));
                });
                self.collection.reset(commentModels);
                self.render();
            });
        },
        showOriginalComments: function() {
            this.collapsed = true;
            this.reload();
        },
        showAllComments: function(){
            this.collapsed = false;
            this.reload();
        }
    });
});
