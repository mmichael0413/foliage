define(function(require){
    var Backbone = require('backbone'),
        context = require('context'),
        AsyncPagedCollection = require('thirdchannel/collections/shared/async_paged'),
        SchedulingCycle = require('procrastination/models/admin/scheduling_cycle');

    return Backbone.Collection.extend({
        model: SchedulingCycle,

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
            if(this.queryString){
                return context.base_url + context.url + "?" + this.queryString;
            } else {
                return context.base_url + context.url;
            }

        }
    });
});