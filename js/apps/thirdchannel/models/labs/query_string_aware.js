/*globals console */
define(function (require) {
	var Backbone = require('backbone'),
		/**
		 * A Basic model for working with urls and query strings
		 * @type Object
		 */
		QueryStringModel = {
			initialize: function (args) {
				if (args.baseURL === undefined) {
					console.error("No variable 'baseURL' found for the query string aware model");
				} else {
					this.baseURL = args.baseURL;
				}
			},
			queryString: undefined,
			
				
            url: function () {
                if (this.queryString) {
                    return this.baseURL + "?" + this.queryString;
                } else {
                    return this.baseURL;    
                }
			}
		};
	return Backbone.Model.extend(QueryStringModel);
});