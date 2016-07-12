define(function(require){

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        Router = require('thirdchannel/routers/router');

        var initialize = function(){
            Router.initialize();
            Backbone.history.start({pushState: true, hashChange: false});
            Handlebars.registerHelper("highlight", function (text, mentionedUsers, options) {
                var highlightMatcher = RegExp("@(\\w+\\s\\w+)\\s\\[[^\\[\\t\\n\\r\\]]+\\]", "g");
                var mentions = [];
                var names = [];

                var userNameIdMap = {};
                for(var i = 0; i < mentionedUsers.length; i++) {
                    userNameIdMap[mentionedUsers[i].user_name] = mentionedUsers[i].user_id;
                }


                var match;
                do {
                    match =  highlightMatcher.exec(text);
                    if (match) {
                        mentions.push(match[0]);
                        names.push(match[1]);
                    }
                } while (match);

                for(var i = 0; i < mentions.length; i++) {
                    text = text.replace(mentions[i], "<a class='highlight' href='/programs/Merchandising/profiles/"+userNameIdMap[names[i]]+"'>"+mentions[i]+"</a>");
                } 
                return text;
            });
            
        };

    return {
        initialize: initialize
    };
});