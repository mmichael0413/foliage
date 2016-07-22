define(function(require){
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
       initialize: function (options) {
           this.activity = options.activity;
           this.programId = options.programId;
           this.objId = this.activity.get('id');
           this.mentions = options.activity.get('mentions');
           this.currentUserId = options.currentUserId;
           this.highlightWords = options.highlightWords;

           this.commentUrl = '/programs/' + this.programId + '/activities/' + this.objId + '/comments';

           // initialize collection
           this.collection = new CommentsCollection([], {url: this.commentUrl });

           this.initializeModels();
           this.collection.bind('add', this.onModelAdded, this);
       },
       render: function () {
           var self = this;
           _.each(this.collection.models, function (model) {
               self.$el.append(new CommentView({model: model, activityId: self.activityId, programId: self.programId,
                   mentions: self.mentions, currentUserId: self.currentUserId, highlightWords: self.highlightWords}).render().el);
           });

           return this;
       },
       initializeModels: function () {
           var comments = this.activity.get('comments');
           var mentions = this.activity.get('mentions');
           var commentModels = [];

           var self = this;
           _.each(comments, function (comment) {
               commentModels.push(new Comment(comment, {url: self.commentUrl, mentions: mentions, currentUserId: self.currentUserId, highlightWords: self.highlightWords}));
           });

           this.collection.add(commentModels);
       },
       onModelAdded: function (model) {
           this.$el.append(new CommentView({model: model, activityId: this.activityId, programId: this.programId, mentions: model.get('mentions'), currentUserId: model.get('currentUserId'), highlightWords: model.get('highlightWords')}).render().el);

           return this;
       },
       showAllComments: function () {
           var self = this;

           this.collection.fetch({reset: true, data: {type: this.activity.get('type')}}).done(function(data, status){
               self.render();
           });
       },
       showOriginalComments: function () {
           var self = this;

           this.collection.reset();
           this.initializeModels();

           // this.render();
       }
   });
});