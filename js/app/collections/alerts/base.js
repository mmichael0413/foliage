define(function(require) {
	var Backbone = require('backbone'),

        /**
         * The Base Collection for fetching Alerts for a particular customer_store
         * 
         * @param  {[type]} )      {                                                                                 var qs = "";                                       if (this.queryString) {                                   qs = this.queryString;                } else {                    qs = "?";                }                qs += "&customer_store=" + this.customerStoreId;                qs += "&resolved=" + this.resolved;            } [description]
         * @param  {[type]} parse: function      (response) {                this.count = response.count;                         return response.items;            }                              } [description]
         * @exports app/collections/alerts/base
         */
		AlertCollection = Backbone.Collection.extend({
            queryString: "",
            urlBase: "",
            resolved: undefined,
            customerStoreId: 0,

            getQueryString: function () {
                //return context.alerts.links.open;
                var qs = "";
                if (this.queryString) {
                    qs = this.queryString;
                } else {
                    qs = "?";
                }
                qs += "&customer_store=" + this.customerStoreId;
                qs += "&resolved=" + this.resolved;
                return qs;
            },
            parse: function (response) {
                this.count = response.count;
                return response.items;
            },

            url: function () {
                return this.urlBase + this.getQueryString();
            },

            // todo: replace this with full ajax Pagination
            pagedUrl: function () {
                return this.urlBase +"/page";
            }
        });

	return AlertCollection;

});