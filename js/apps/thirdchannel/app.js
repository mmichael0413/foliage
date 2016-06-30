define(function(require){

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        Router = require('thirdchannel/routers/router');

        var initialize = function(){
            Router.initialize();
            Backbone.history.start({pushState: true, hashChange: false});
            Handlebars.registerHelper("highlight", function (text, options) {
                var highlightMatcher = RegExp("@\\w+\\s\\w+\\s\\[[^\\[\\t\\n\\r\\]]+\\]", "g");
                var mentions = [];

                var match;
                do {
                    match =  highlightMatcher.exec(text);
                    if (match) {
                        mentions.push(match);
                    }
                } while (match);

                for(var i = 0; i < mentions.length; i++) {
                    text = text.replace(mentions[i], "<span class='highlight'>"+mentions[i]+"</span>");
                } 
                return text;
            });
            
        };

    return {
        initialize: initialize
    };
});