define(function(require){
	var Backbone = require('backbone'),
		context = require('context'),
		Schedule = require('procrastination/models/admin/schedule');

	return Backbone.Collection.extend({
		initialize: function() {

			return this;
		},

		model: Schedule,

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
                return context.base_url + '/admin/scheduling/upcoming/list' + "?" + this.queryString;
            } else {
                return context.base_url + '/admin/scheduling/upcoming/list';
            }

		}
	});
});