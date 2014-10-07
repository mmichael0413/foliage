define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'handlebarsTemplates',
    'app/models/comments/comment'
], function($, _, Backbone, Handlebars, HandlebarsTemplates, Comment){
   return Backbone.View.extend({
       initialize: function (options) {
           this.activity = options.activity;
           this.collection = options.collection;

       },
       template: HandlebarsTemplates['new-comment'],
       events: {
           'click .add-comment': 'createComment'
       },
       render: function () {
           this.$el.html(this.template(this.activity.attributes));
           return this;
       },
       createComment: function (e) {
           e.preventDefault();
           e.stopPropagation();
           var self = this;
           var comment = new Comment({comment: this.$('.new-comment-field').val()}, {url: this.collection.url});

           if (comment.isValid()) {
               comment.set({type: this.activity.get('type'), id: this.activity.get('id')});
               comment.save().done(function (obj, status) {
                   comment.set(obj);
                   self.collection.add([comment]);
                   self.$('.new-comment-field').val('');
               }).fail(function () {

               });
           }
       },
       commentFocus: function () {
           this.$(".new-comment-field").focus();
           $('body').scrollTo(this.$(".new-comment-field"),{duration:10000, offsetTop : '50'});
       }

   });

});