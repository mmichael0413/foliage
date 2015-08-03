define(function(require){
    var Backbone = require('backbone'),
        context = require('context');


    return Backbone.Collection.extend({


        queryString: "",

        setQueryString: function (qs) {
            this.queryString = qs + "&format=json";
        },
        parse: function (data) {
            if (data.content) {
                this.pages = data.content.pages;
                return data.content.items;
            } else {
                return data;
            }
        },

        url: function() {
            if(this.queryString){
                return context.base_url + context.url + "?" + this.queryString;
            } else {
                return context.base_url + context.url;
            }

        }
    });
});