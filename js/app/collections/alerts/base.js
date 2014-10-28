define(function(require) {
	var Backbone = require('backbone'),

        /**
         * The Base Collection for fetching Alerts for a particular customer_store
         * 
         * @exports app/collections/alerts/base
         */
		AlertCollection = Backbone.Collection.extend({
            queryString: "",
            
            resolved: undefined,
            per: undefined,
            page: 1,
            getCustomerStoreId: function () {return 0;},

            getUrlBase: function (){ return "";},

            getQueryString: function () {
                //return context.alerts.links.open;
                var qs = "";
                if (this.queryString) {
                    qs = this.queryString;
                } else {
                    qs = "?";
                }
                qs += "&customer_store=" + this.getCustomerStoreId();
                qs += "&resolved=" + this.resolved;
                qs += "&page=" + this.page;
                if (this.per) {
                    qs += "&per=" + this.per;
                }


                return qs;
            },
            parse: function (response) {
                this.count = response.pages.totalCount;
                this.pages = response.pages;
                return response.items;
            },

            url: function () {
                return this.getUrlBase() + this.getQueryString();
            }
        });

	return AlertCollection;

});