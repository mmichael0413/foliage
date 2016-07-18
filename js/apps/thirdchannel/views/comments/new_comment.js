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
           $.get('/programs/'+context.programId+'/activities/'+this.activity.id+'/get_mentionable_users', function(data) {
               var users = [];
               var program = data.table.program;
               users.push({label: "All "+program+" Agents\t[Agent]\t\t", value: "ALL_AGENTS"});
               users.push({label: "All "+program+"\t["+program+"]\t\t", value: "ALL_BRAND"});
               data.table.users.table.users.forEach(function (item) {
                   var user = item.table;
                   var userRole = user.user_role;
                   userRole = userRole.charAt(0).toUpperCase()+userRole.substring(1);
                   users.push({label: user.first_name+"\u0020"+user.last_name+"\t["+userRole+"]\t"+user.residential_address.table.state+"\t"+user.email, value: user.person_uuid});
               });


               var displayItem = function(e, ui) {
                   e.preventDefault();
                   e.stopPropagation();
                   if (ui.item.value == "placeholder") {
                       return;
                   }
                   var splitLabel = ui.item.originalText.split("\t");
                   var currentText = $(e.target).html();
                   $(e.target).html(currentText.substring(0, currentText.lastIndexOf('@')+1)+splitLabel[0]+' '+splitLabel[1]);
                   var mentions = [];
                   var previousMentions = $(e.target).data('mentions');
                   if (previousMentions) {
                       mentions = mentions.concat(previousMentions);
                   }
                   mentions.push(ui.item.value);

                   $(e.target).data('mentions', mentions);
                   $(e.target).trigger($.Event("highlight"));
                   $(e.target).trigger($.Event("keypress"));
                   $(e.target).trigger($.Event("change"));
               };

               $(".new-comment-field").autocomplete({
                   source: function (request, response) {
                       var term = request.term.substring(request.term.lastIndexOf('@')+1);
                       var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex(term), "i" );
                       response( $.grep( users, function( item ){
                           var matchText = (item.originalText) ? item.originalText : item.label;
                           return matcher.test(matchText);
                       }));
                   },
                   create: function () {

                       $(this).data("ui-autocomplete")._renderItem = function (ul, item) {
                           if (item.value == "placeholder") {
                               return $("<li></li>")
                                   .addClass("autocompletePlaceholder")
                                   .html(item.label)
                                   .appendTo(ul);
                           }
                           var li =  $("<li></li>")
                               .data('value', item.value);

                           var userInfo = item.label.split("\t");
                           var classNames = ["autocompleteName", "autocompleteProgram", "autocompleteState", "autocompleteEmail"];
                           for(var i = 0; i< userInfo.length; i++) {
                               $(document.createElement('div'))
                                   .addClass("autocompleteColumn")
                                   .addClass(classNames[i])
                                   .html(userInfo[i])
                                   .appendTo(li);
                           }
                           li.appendTo(ul);
                           return li;
                       }

                       $(this).data("ui-autocomplete")._renderMenu = function (ul, items) {
                           var placeholder = {label: "Searching for.....", value: "placeholder"};
                           items.unshift(placeholder);
                           var that = this;
                           $.each( items, function( index, item ) {
                               that._renderItemData( ul, item );
                           });
                       };
                   },
                   focus: function (e, ui) {
                       e.preventDefault();
                       e.stopPropagation();
                   },
                   select: displayItem,
                   search: function(e, ui) {
                       var currentText = $(e.target).text();
                       var matcher = new RegExp('(?:@([\\w\\s]+))$')
                       if(!matcher.test(currentText)) {
                           e.preventDefault();
                           e.stopImmediatePropagation();
                       } else {
                           var matchArr = matcher.exec(currentText);
                           $(e.target).data('autocompleteSearchTerm', matchArr[1]);
                       }
                   },
                   response: function (e, ui) {
                       var searchMatch = new RegExp($(e.target).data('autocompleteSearchTerm'), "gi");
                       _.each(ui.content, function (content) {
                           if (!content.originalText) {
                               content.originalText = content.label;
                           }
                           var matches = content.originalText.match(searchMatch);
                           var text = content.originalText.split(searchMatch);
                           if (text && text[0] == "") {
                               text = text.slice(1);
                           }
                           var newText = "";
                           for(var i = 0; i < matches.length; i++) {
                               newText += "<span class='autocompleteSearchTerm'>"+matches[i]+"</span>" + text[i];
                           }
                           content.label = newText;
                           //content.label = content.originalText.replace(searchMatch,"<span class='autocompleteSearchTerm'>"+searchMatch.source+"</span>")
                       });

                   }
               });
           });


       },
       template: HandlebarsTemplates['thirdchannel/new-comment'],
       events: {
           'click .add-comment': 'createComment',
           'keypress .new-comment-field' : 'highlight'
       },
       render: function () {
           this.$el.html(this.template(this.activity.attributes));
           return this;
       },
       createComment: function (e) {
           e.preventDefault();
           e.stopPropagation();
           var self = this;
           var comment = new Comment({comment: this.$('.new-comment-field').text()}, {url: this.collection.url});

           if (comment.isValid()) {
               comment.set({type: this.activity.get('type'), id: this.activity.get('id'), mentions: $('.new-comment-field').data('mentions')});
               comment.save().done(function (obj, status) {
                   comment.set(obj);
                   self.collection.add([comment]);
                   self.$('.new-comment-field').html('');
               }).fail(function () {

               });
           }
       },
       highlight: function (e) {
           /*

           var text = $(e.target).html();
           var highlightMatcher = RegExp("(?!<a class='highlight'>)(?:@\\w+\\s\\w+\\s\\[[^\\[\\t\\n\\r\\]]+\\])(?!<\/a>)", "g");
           var mentions = [];

           // highlight previous mentions
           var match;
           do {
               match =  highlightMatcher.exec(text);
               if (match) {
                   mentions.push(match[0]);
               }
           } while (match);

           for(var i = 0; i < mentions.length; i++) {
               text = text.replace(mentions[i], "<a class='highlight'>"+mentions[i]+"</a>\u200B");
           }

           $(e.target).html(text);
           //$(e.target).trigger($.Event("keypress"))
           //$(e.target).trigger($.Event("change"))
           //$(e.target).focus();
           //$(e.target).setSelectionRange(text.length, text.length);
           */
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