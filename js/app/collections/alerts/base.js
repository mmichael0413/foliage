define(function(require) {
	var context = require('context'),
        AsyncPagedCollection = require('app/collections/shared/async_paged'),

        /**
         * The Base Collection for fetching Alerts for a particular customer_store
         *
         * @extends {module:app/collections/shared/async_paged}
         * @exports app/collections/alerts/base
         */
		AlertCollection = AsyncPagedCollection.extend({
            queryString: "",
            
            resolved: undefined,
            per: undefined,
            getUrlBase: function () {
                return context.alerts.links.self;
            },
            getCustomerStoreId: function () {
                return context.requestParameters[1];
            },

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
           
            url: function () {
                return this.getUrlBase() + this.getQueryString();
            }
        });

	return AlertCollection;

});