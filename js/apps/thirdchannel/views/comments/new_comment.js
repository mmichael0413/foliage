define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        Comment = require('thirdchannel/models/comments/comment');

   return Backbone.View.extend({
       initialize: function (options) {
           this.activity = options.activity;
           this.collection = options.collection;
           $.get('activities/'+this.activity.id+'/get_mentionable_users', function(data) {
               var users = []
               data.table.users.forEach(function (item) {
                   var user = item.table;
                   users.push({label: user.first_name+" "+user.last_name+"\t["+user.program_name+"]\t"+user.residential_address.table.state+"\t"+user.email, value: user.person_uuid});
               });

               var displayItem = function(e, ui) {
                   e.preventDefault();
                   e.stopPropagation();
                   var splitLabel = ui.item.label.split("\t");
                   var currentText = $(e.target).val();
                   $(e.target).val(currentText.substring(0, currentText.lastIndexOf('@'))+splitLabel[0]+" "+splitLabel[1]);
               };

               $(".new-comment-field").autocomplete({
                   source: users,
                   _renderItem: function( ul, item ) {},
                   focus: function (e, ui) {
                       e.preventDefault();
                       e.stopPropagation();
                   },
                   select: displayItem,
                   search: function(e, ui) {
                       var currentText = $(e.target).val();
                       if(currentText.charAt(currentText.length-1) != '@') {
                           e.preventDefault();
                           e.stopImmediatePropagation();
                       }
                   }
               });
           })


       },
       template: HandlebarsTemplates['thirdchannel/new-comment'],
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
           if(!this.activity.get('isMobile') || (this.activity.get('isMobile') && this.activity.get('singleActivity'))) {
               this.$(".new-comment-field").focus();
              // $('.content-holder').scrollTo(this.$(".new-comment-field"),{duration:10000, offsetTop : '50'});
           } else {
               window.location.assign ( "/programs/" + context.programId + "/activities/" + this.activity.get('activity_id'));
           }

       }

   });

});