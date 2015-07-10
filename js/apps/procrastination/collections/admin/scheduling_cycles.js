define(function(require){
    var Backbone = require('backbone'),
        context = require('context'),
        AsyncPagedCollection = require('thirdchannel/collections/shared/async_paged');

    return Backbone.Collection.extend({
        page: 1,

        queryString: "",

        setQueryString: function(qs) {
            this.queryString = qs + "&format=json";
        },

        parse: function(data) {
            if(data.content) {
                this.pages = data.content.pages;
                return data.content.items;
            } else {
                return data;
            }
        },

        url: function() {
            return context.base_url + context.url;
        }
    });
});