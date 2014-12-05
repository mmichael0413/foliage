define(function(require) {
	var context = require('context'),
        AsyncPagedCollection = require('thirdchannel/collections/shared/async_paged'),

        /**
         * The Base Collection for fetching Alerts for a particular customer_store
         *
         * @extends {module:thirdchannel/collections/shared/async_paged}
         * @exports thirdchannel/collections/alerts/base
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
            getCreatedCheckinId: function () {
                return undefined;
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
                if (this.getCreatedCheckinId() !== undefined) {
                    qs += "&created_checkin=" + this.getCreatedCheckinId();
                }


                return qs;
            },
           
            url: function () {
                return this.getUrlBase() + this.getQueryString();
            }
        });

	return AlertCollection;

});